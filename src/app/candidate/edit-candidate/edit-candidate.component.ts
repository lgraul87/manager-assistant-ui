import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/_shared/interfaces/candidate';
import { CandidatesService } from '../../_shared/services/candidates.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss']
})
export class EditCandidateComponent implements OnInit {

  id!: string;
  candidate!: Candidate;

  constructor(private route: ActivatedRoute,
    private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.candidatesService.getCandidate(this.id).subscribe((candidate) => this.candidate = candidate);
  }


}
