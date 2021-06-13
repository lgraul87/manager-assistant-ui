import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../_shared/services/employees.service';
import { Employee } from '../_shared/interfaces/employee';
import { Router } from '@angular/router';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee!: Employee;
  employees!: Employee[];
  isReady = false;

  displayedColumns: string[] = ['select', 'name', 'lastName','email','phone','city','technology',
  'experience','isRemote','salary','position','seniority','noticePeriod'];
  dataSource = new MatTableDataSource<Employee>([]);
  selection = new SelectionModel<Employee>(true, []);

  constructor(
    private router: Router,
    private employeesService: EmployeesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees) =>{
      this.employees = employees
     this.dataSource.data = this.employees;
     this.isReady = true;
    });
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

  goToEditEmployee() {
    this.employee = this.selection.selected[0];
    this.router.navigate(['employees/edit-employee', this.employee.id]);
  }

  openDeleteEmployees() {
    this.dialog.open(DeleteEmployeeComponent).afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.deleteEmployees();
      }
    });
  }

  private deleteEmployees() {
    const requests = [];
    for (let index = 0; index < this.selection.selected.length; index++) {
      requests.push(this.employeesService.deleteEmployee(this.selection.selected[index].id));
    }
    forkJoin(requests).subscribe(() => {
      const ids = this.selection.selected.map(employee => employee.id);
      this.employees = this.employees.filter(employee => !ids.includes(employee.id));
      this.dataSource.data = this.employees;
      this.selection.clear();
      this.snackBar.open('Employees deleted correctly', '', { duration: 5000 });
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
