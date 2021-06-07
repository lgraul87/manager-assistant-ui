import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/_shared/interfaces/employee';
import { EmployeesService } from 'src/app/_shared/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  id!: string;
  employee!: Employee;
  form!: FormGroup;

  constructor(
    private routerNavigate: Router,
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.employeesService.getEmployee(this.id).subscribe((employee) => {
      this.employee = employee;
      this.initForm(this.employee);
    });
  }

  get name() {
    return this.form.controls.name;
  }

  get lastName() {
    return this.form.controls.lastName;
  }

  get dni() {
    return this.form.controls.dni;
  }

  get email() {
    return this.form.controls.email;
  }

  get phone() {
    return this.form.controls.phone;
  }

  get city() {
    return this.form.controls.city;
  }

  get technology() {
    return this.form.controls.technology;
  }

  get linkedIn() {
    return this.form.controls.linkedIn;
  }

  get salary() {
    return this.form.controls.salary;
  }

  get position() {
    return this.form.controls.position;
  }

  get seniority() {
    return this.form.controls.seniority;
  }

  get ssNumber() {
    return this.form.controls.ssNumber;
  }

  get iban() {
    return this.form.controls.iban;
  }

  get comments() {
    return this.form.controls.comments;
  }

  get experience() {
    return this.form.controls.experience;
  }

  editEmployee() {
    this.employeesService.editEmployee(this.form.value).subscribe(() => {
      this.routerNavigate.navigate(["employees"]);
    });
  }

  private initForm(employee: Employee) {
    this.form = this.fb.group({
      id:employee.id,
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
      dni: ["", [
        Validators.required,
        Validators.pattern("[0-9]{8}[A-Za-z]{1}")
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
      linkedIn: ["", [
        Validators.minLength(7),
        Validators.maxLength(100)
      ]],
      experience: new Date(),
      salary: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6),
        Validators.pattern("[1-9]{1}[0-9]+")
      ]],
      position: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]],
      seniority: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]],
      ssNumber: ["", [
        Validators.pattern("[0-9]{12}")
      ]],

      iban: ["", [
        Validators.required,
        Validators.pattern("[A-Za-z]{2}[0-9]{22}")
      ]],
      comments: ["",[
        Validators.minLength(3),
        Validators.maxLength(255),
      ]],

      noticePeriod: "",
      isRemote: ""
    });
  }
}
