import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.candidatesService.getCandidate(this.id).subscribe((candidate) => {
      this.candidate = candidate;
      this.initForm(this.candidate);
    });
  }

  get name() {
    return this.form.controls.name;
  }

  get lastName() {
    return this.form.controls.lastName;
  }

  get email() {
    return this.form.controls.email;
  }

  get city() {
    return this.form.controls.city;
  }

  get technology() {
    return this.form.controls.technology;
  }

  get phone() {
    return this.form.controls.phone;
  }

  get linkedIn() {
    return this.form.controls.linkedIn;
  }

  get comments() {
    return this.form.controls.comments;
  }

  dateFilter(d: Date | null): boolean {
    const now = new Date();
    const date = (d || now);
    return date.getTime() <= now.getTime();
  }

  private initForm(candidate: Candidate) {
    this.form = this.fb.group({
      id:candidate.id,
      name: [candidate.name,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      lastName: [candidate.lastName,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      email: [candidate.email,[
        Validators.required,
        Validators.email
      ]],
      phone: [candidate.phone,[
        Validators.pattern("[0-9]{9}")
      ]],
      city: [candidate.city,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      technology: [candidate.technology,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]],
      linkedIn: [candidate.linkedIn,[
        Validators.minLength(7),
        Validators.maxLength(100)
      ]],
      noticePeriod: candidate.noticePeriod,
      comments: [candidate.comments,[
        Validators.minLength(10),
        Validators.maxLength(255)
      ]],
      experience: candidate.experience,
      isRemote: candidate.isRemote,
      isAvailable: candidate.isAvailable
    });
  }
  editCandidate() {
    this.candidatesService.editCandidate(this.form.value).subscribe(() =>{
      this.routeNavigate.navigate(['candidates']);
      this.snackBar.open('Candidate edited correctly', '', { duration: 5000 });
    });
  }
}
