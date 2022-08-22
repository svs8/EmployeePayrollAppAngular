import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // injected HttpClient to perform Http request
  constructor(private http:HttpClient) { }

     /**
   * Purpose: this method is used to request the POST http method.
   * it save the employee data in the database.
   */
  insertEmployee(employee: any) {
    return this.http.post("http://localhost:8081/employeepayrollservice/create", employee);
  }

 /**
   * Purpose: this method is used to request the GET http method.
   * it fetch the employee data form the database.
   */  
  getEmployee() {
    return this.http.get("http://localhost:8081/employeepayrollservice/get");
  }

  //Used HttpClient service class  to perform Http request to get data from the database for particular Id on given url
  getEmployeeById(Id: number) {
    return this.http.get("http://localhost:8081/employeepayrollservice/get/"+Id);
  }

  //Used HttpClient service class  to perform Http request to update data in database on given url
  updateEmployeeById(employee: any,Id: number) {
    return this.http.put("http://localhost:8081/employeepayrollservice/update/"+Id, employee);
  }
   
   /**
   * Purpose : DELETE request method to hit the HTTP server.s
   */
  deleteById(employeeId:number): Observable<any> {
    return this.http.delete("http://localhost:8081/employeepayrollservice/delete/"+employeeId);
  }
}
