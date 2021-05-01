import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../_shared/interfaces/candidate';
import { CandidatesService } from './candidate-services/candidates.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidates: Candidate[] = [];
  displayedColumns: string[] = ['name', 'last name'];

  constructor(
    private router: Router,
    private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.getCandidates().subscribe((data) => this.candidates = data);
  }

  goToAddCandidate(){
    this.router.navigateByUrl('candidates/add-candidate');
  }

}
