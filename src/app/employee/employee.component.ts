import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employee-services/employees.service';
import { Employee } from '../_shared/interfaces/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = []
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.employeesService.getEmployees().subscribe((data) => this.employees = data);
  }
}
