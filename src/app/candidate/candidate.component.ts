import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../_shared/interfaces/candidate';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CandidatesService } from '../_shared/services/candidates.service';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';



@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidate!: Candidate;
  candidates!: Candidate[];

  displayedColumns: string[] = ['select', 'name', 'last name'];
  dataSource = new MatTableDataSource<Candidate>([]);
  selection = new SelectionModel<Candidate>(true, []);


  constructor(
    private router: Router,
    private candidatesService: CandidatesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.candidatesService.getCandidates().subscribe((candidates) => {
      this.candidates = candidates;
      this.dataSource.data = this.candidates;
    });
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  goToAddCandidate() {
    this.router.navigateByUrl('candidates/add-candidate');
  }

  goToEditCandidate() {
    this.candidate = this.selection.selected[0];
    this.router.navigate(['candidates/edit-candidate', this.candidate.id]);
  }

  openDeleteCandidates() {
    this.dialog.open(DeleteCandidateComponent).afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.deleteCandidates();
      }
    });
  }

  private deleteCandidates() {
    const requests = [];
    for (let index = 0; index < this.selection.selected.length; index++) {
      requests.push(this.candidatesService.deleteCandidate(this.selection.selected[index].id));
    }
    forkJoin(requests).subscribe(() => {
      const ids = this.selection.selected.map(candidate => candidate.id);
      this.candidates = this.candidates.filter(candidate => !ids.includes(candidate.id));
      this.dataSource.data = this.candidates;
      this.selection.clear();
      this.snackBar.open('Candidates deleted correctly', '', { duration: 5000 });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
