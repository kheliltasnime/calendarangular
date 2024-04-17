import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:http://localhost:8083/api/example/employe/api/arsii';

  constructor(private httpclient: HttpClient) { }

  getAllEmployee(){
    return this.httpclient.get<Employee[]>(this.baseUrl+'/employee');
  }

  deleteEmployee(id: number){
    return this.httpclient.delete(this.baseUrl+'/employee/' + id);
  }

  addEmployee(employee : Employee) {
    return this.httpclient.post(this.baseUrl + '/employee',employee);
  }

  editEmployee(id: number,employee:Employee){
    return this.httpclient.put(this.baseUrl + '/employee/' + id, employee);
  }

  getEmployeeById(id : number){
    return this.httpclient.get<Employee>(this.baseUrl + '/employee/' +id );
  }
}
