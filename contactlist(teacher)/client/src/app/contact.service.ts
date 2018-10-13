import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Contact } from './contact';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: Http) { }

  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
    .map(res => res.json());
  }

  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers})
    .map(res => res.json());
  }

  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact/' + id)
    .map(res => res.json());
  }
}
