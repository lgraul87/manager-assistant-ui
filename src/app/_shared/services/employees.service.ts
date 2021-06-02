import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:3000/employees");
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>("http://localhost:3000/employees", employee);
  }

  editEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>("http://localhost:3000/employees/" + employee.id, employee);
  }

  deleteEmployee(id:string): Observable<Employee>{
    return this.http.delete<Employee>(`http://localhost:3000/employees/${id}`);
  }
}
