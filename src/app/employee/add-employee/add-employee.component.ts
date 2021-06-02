import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../../_shared/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  addEmployee() {
    this.employeesService.addEmployee(this.form.value).subscribe(() => {
      this.router.navigateByUrl('employees');
    });
  }

  private initForm() {
    this.form = this.fb.group({
      name: "",
      lastName: "",
      dni: "",
      email: "",
      phone: "",
      city: "",
      technology: "",
      experience: "",
      isRemote: "",
      salary: "",
      position: "",
      seniority: "",
      ssNumber: "",
      iban: "",
      comments: "",
      linkedIn: "",
      noticePeriod: ""
    });
  }
}
