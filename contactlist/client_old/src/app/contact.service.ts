import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Contact} from './contact';
import {School} from './contact';
import {Schooldata} from './contact';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }
  //retrieving ContactService
  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
      .map(res =>res.json());
  }

  //add contact method
  addContact(newContact)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers})
      .map(res =>res.json());
  }

  //delete method
  deleteContact(id)
  {
    return this.http.delete('http://localhost:3000/api/contact/'+id)
      .map(res =>res.json());
  }
}

export class SchoolService {
    constructor(private http: Http) { }
    //retrieving ContactService
    getSchools()
    {
      return this.http.get('http://localhost:3000/api/schools')
        .map(res =>res.json());
    }
  
    //add contact method
    addSchool(newSchool)
    {
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      
      return this.http.post('http://localhost:3000/api/school', newSchool, {headers:headers})
        .map(res =>res.json());
    }
  
    //delete method
    deleteSchool(id)
    {
      return this.http.delete('http://localhost:3000/api/school/'+id)
        .map(res =>res.json());
    }
}


export class SchooldataService {
  
    constructor(private http: Http) { }
    //retrieving SchooldataService
    getSchooldatas()
    {
      return this.http.get('http://localhost:3000/api/schooldatas')
        .map(res =>res.json());
    }
  
    //add schooldata method
    addSchooldata(newSchooldata)
    {
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      
      return this.http.post('http://localhost:3000/api/schooldata', newSchooldata, {headers:headers})
        .map(res =>res.json());
    }
  
    //delete method
    deleteSchooldata(id)
    {
      return this.http.delete('http://localhost:3000/api/schooldata/'+id)
        .map(res =>res.json());
    }
}
