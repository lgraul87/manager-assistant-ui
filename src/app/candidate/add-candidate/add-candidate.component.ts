import { Component, OnInit } from '@angular/core';

import { CandidatesService } from 'src/app/_shared/services/candidates.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  constructor(
    private candidatesService: CandidatesService,
  ) { }

  ngOnInit(): void {
  }
}
