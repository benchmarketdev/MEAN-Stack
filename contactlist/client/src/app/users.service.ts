import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
// import {Schooldata} from './contact';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }
      //retrieving SchooldataService
      getUsers()
      {
        return this.http.get('http://localhost:3000/api/users')
          .map(res =>res.json());
      }
    
      //add user method
      addUser(newUser)
      {
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        
        return this.http.post('http://localhost:3000/api/users/register', newUser, {headers:headers})
          .map(res =>res.json());
      }
    
}
