import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Employee } from './employee';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: Http) { }

  getEmployeeLists(){
    return this.http.get('https://api.github.com/repos/angular/angular/commits')
    .map(res => res.json());
  }
}
