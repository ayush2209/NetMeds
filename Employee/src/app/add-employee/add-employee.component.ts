import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) { }

  addEmployee(data) {
    this.service.addEmployee(data).subscribe(result => {
      this.router.navigate(['/']);
      console.log(result);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }
}
