import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  editEmployee() {
    this.employeesService.editEmployee(this.form.value).subscribe(() => {
      this.routerNavigate.navigate(["employees"]);
    });
  }

  private initForm(employee: Employee) {
    this.form = this.fb.group({
      id:employee.id,
      name: employee.name,
      lastName: employee.lastName,
      dni: employee.dni,
      email: employee.email,
      phone: employee.phone,
      city: employee.city,
      technology: employee.technology,
      linkedIn: employee.linkedIn,
      noticePeriod: employee.noticePeriod,
      experience: employee.experience,
      salary: employee.salary,
      position: employee.position,
      seniority: employee.seniority,
      ssNumber: employee.ssNumber,
      iban: employee.iban,
      comments: employee.comments,
      isRemote: employee.isRemote
    });
  }
}
