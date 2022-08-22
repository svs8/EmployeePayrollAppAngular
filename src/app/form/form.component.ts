import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  // Make parameterized constructor of employee which is our model
  employee: EmployeeModel = new EmployeeModel("",new Date,"", "","","", 0, "");

  //Getting id from routes snapshot using paramMap for doing update operation
  Id: any = this.route.snapshot.paramMap.get("Id");


  
  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  //whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {
    //here we use this.id because we want to get the data of particular employee by searching there id for which we use Activated route
   this.service.getEmployeeById(this.Id).subscribe((getData: any) => {
    console.log(getData);
    this.employee = getData;
  });
    
  }

  // navigate user to DashboardComponent
  onCancel() {
    this.router.navigate(["error"]);
    setTimeout(function(){
      
    },3000);

    this.router.navigate(["dashboard"]);
  }



  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }


  

  addEmployeeData() {
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["dashboard"])
    })
  
  }

  
  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.Id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });
    
  }

}
