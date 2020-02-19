import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  nodeUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  addEmployee(data) {
    return this.http.post(`${this.nodeUrl}/addEmployee`, data);
  }
  getEmployee() {
    return this.http.get(`${this.nodeUrl}/getEmployee`);
  }
  updateEmployee(data) {
    return this.http.post(`${this.nodeUrl}/updateEmployee`, data);
  }
  removeEmployee(id) {
    return this.http.delete(`${this.nodeUrl}/deleteEmployee/${id}`);
  }
}
