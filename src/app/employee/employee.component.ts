import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../_shared/services/employees.service';
import { Employee } from '../_shared/interfaces/employee';
import { Router } from '@angular/router';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'lastName', 'dni'];
  dataSource = new MatTableDataSource<Employee>([]);
  selection = new SelectionModel<Employee>(true, []);

  constructor(private router: Router,
    private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees) => this.dataSource.data = employees);
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  goToAddEmployee() {
    this.router.navigateByUrl('employees/add-employee');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
