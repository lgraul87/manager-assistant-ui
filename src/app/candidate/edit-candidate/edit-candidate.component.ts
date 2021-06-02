import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
    private routeNavigate : Router,
    private candidatesService: CandidatesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.candidatesService.getCandidate(this.id).subscribe((candidate) => {
      this.candidate = candidate;
      this.initForm(this.candidate);
    });
  }

  private initForm(candidate: Candidate) {
    this.form = this.fb.group({
      id:candidate.id,
      name: candidate.name,
      lastName: candidate.lastName,
      email: candidate.email,
      phone: candidate.phone,
      city: candidate.city,
      technology: candidate.technology,
      linkedIn: candidate.linkedIn,
      noticePeriod: candidate.noticePeriod,
      comments: candidate.comments,
      isRemote: candidate.isRemote,
      isAvailable: candidate.isAvailable
    });
  }
  editCandidate() {
    this.candidatesService.editCandidate(this.form.value).subscribe(() =>{
      this.routeNavigate.navigate(['candidates']);
    });
  }
}
