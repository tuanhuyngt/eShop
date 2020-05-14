import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name ;
  email ;
  password ;

  SaveFormData() {
    const Employee = {
      Name: this.name,
      Email: this.email,
      Password: this.password
    };
    this.httpClinet.post('http://localhost:5000/api/Employee', Employee)
    .subscribe((response)=>{
      console.log(response);
    });
  }

  constructor(private httpClinet: HttpClient) { }

  ngOnInit() {

  }

}
