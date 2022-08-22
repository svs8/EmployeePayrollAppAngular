import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashboardComponent implements OnInit {

  // Injected dependencies 
  constructor(private router: Router, private service: EmployeeService) { }

  employee: any;

  ngOnInit(): void {

   
    this.service.getEmployee().subscribe(data => {
      this.employee = data;
      console.log("hello");
      console.log(this.employee);
      console.log("end");

    });
   }

  // when an onAddUser function is called, it will naviagte to the form view
  onAddUser() {
       this.router.navigate(["form"]);
  }

  
  deleteById(Id: number) {
      console.log(Id);  
      this.service.deleteById(Id).subscribe((data)  =>{
      console.log("data deleted!!!!! test");
      this.ngOnInit();
       this.router.navigate(["dashboard"]);
      });
      
  }

  
  editById(Id: number) {
    this.router.navigate(['update', Id]);
  }

}
