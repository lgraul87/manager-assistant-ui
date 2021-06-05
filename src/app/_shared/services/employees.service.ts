import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Employee } from '../interfaces/employee';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private readonly url = environment.url;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/employees/`, employee);
  }

  editEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/employees/${employee.id}`, employee);
  }

  deleteEmployee(id:string): Observable<Employee>{
    return this.http.delete<Employee>(`http://localhost:3000/employees/${id}`);
  }
}
