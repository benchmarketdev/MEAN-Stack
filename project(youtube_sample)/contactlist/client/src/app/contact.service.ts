import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Contact} from './contact';
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
    console.log(newContact);

    var headers = new Headers();
    headers.append('Content-Type','application/json');
    
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers})
      .map(res =>res.json());
  }

  //delete method
  deleteContact(id)
  {
    console.log(String(id));
    return this.http.delete('http://localhost:3000/api/contact/'+id)
      .map(res =>res.json());
  }
}
