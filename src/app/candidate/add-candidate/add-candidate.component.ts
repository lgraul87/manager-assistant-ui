import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private candidateService: CandidatesService) { }

  ngOnInit(): void {
    this.initForm();
  }

  addCandidate() {
    this.candidateService.addCandidate(this.form.value).subscribe(() => {
      this.router.navigateByUrl('candidates');
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

  private initForm() {
    this.form = this.fb.group({
      name: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      lastName: ["", [
        Validators.required,
        Validators.minLength(3),
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
        Validators.pattern('^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$')
      ]],
      technology: ["", [
        Validators.required,
        Validators.minLength(2)
      ]],
      linkedIn: "",
      noticePeriod: "1",
      comments: "",
      isRemote: false,
      isAvailable: false
    });
  }
}
