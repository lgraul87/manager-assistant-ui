import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/_shared/services/candidates.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  form!: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private candidateService: CandidatesService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  addCandidate() {
    this.candidateService.addCandidate(this.form.value).subscribe(() => {
      this.router.navigateByUrl('candidates');
      this.snackBar.open('Candidate added correctly', '', { duration: 5000 });
    });
  }

  dateFilter(d: Date | null): boolean {
    const now = new Date();
    const date = (d || now);
    return date.getTime() <= now.getTime();
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

  private initForm() {
    this.form = this.fb.group({
      name: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      lastName: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      email: ["", [
        Validators.required,
        Validators.email
      ]],
      phone: ["", [
        Validators.pattern("[0-9]{9}")
      ]],
      city: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      technology: ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]],
      linkedIn: ["",[
        Validators.minLength(7),
        Validators.maxLength(100)
      ]],
      noticePeriod: "1",
      comments: ["",[
        Validators.minLength(10),
        Validators.maxLength(255)
      ]],
      experience: new Date(),
      isRemote: false,
      isAvailable: false
    });
  }
}
