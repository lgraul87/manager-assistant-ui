import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../_shared/interfaces/candidate';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CandidatesService } from '../_shared/services/candidates.service';



@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidate!: Candidate;

  displayedColumns: string[] = ['select', 'name', 'last name'];
  dataSource = new MatTableDataSource<Candidate>([]);
  selection = new SelectionModel<Candidate>(true, []);


  constructor(
    private router: Router,
    private candidatesService: CandidatesService,

 ) { }

  ngOnInit(): void {
    this.candidatesService.getCandidates().subscribe((candidates) => this.dataSource.data = candidates);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
