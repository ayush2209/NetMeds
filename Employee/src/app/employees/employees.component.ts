import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  searchText;
  employeeObj = {
    _id: null,
    empName: null,
    skill: null,
    dob: null,
    salary: null
  };
  constructor(private servcie: EmployeeService) {
    this.getEmployee();
    this.updateData('data');
  }
  pages = 1;
  employee: any = [];
  getEmployee() {
    this.servcie.getEmployee().subscribe(result => {
      this.employee = result;
      console.log(this.employee);
    }, err => {
      console.log(err);
    });
  }

  pickOne(id) {
    this.employeeObj = id;
  }

  updateData(data) {
    console.log(data);
    this.servcie.updateEmployee(data).subscribe(updateData => {
      console.log(updateData);
    });
  }
  removeEmployee(id) {
    console.log(id);
    this.servcie.removeEmployee(id).subscribe(removeData => {
      this.getEmployee();
    }, err => {
      console.log(err);
    });
  }
  ngOnInit(): void {
  }
}
