

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from '../app/shared/model/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    get(user:User) {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user._id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}






















// import { Injectable } from '@angular/core';
// import {Http,Headers} from '@angular/http';
// // import {User} from './shared/model/user';

// import 'rxjs-compat/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: Http) { }
//   //retrieving UserService
//   getUsers()
//   {
//     return this.http.get('http://localhost:3000/api/users')
//       .map(res =>res.json());
//   }

//   //add user method
//   addUser(newUser)
//   {
//     var headers = new Headers();
//     headers.append('Content-Type','application/json');
    
//     return this.http.post('http://localhost:3000/api/user', newUser, {headers:headers})
//       .map(res =>res.json());
//   }

//   //delete method
//   deleteUser(id)
//   {
//     return this.http.delete('http://localhost:3000/api/user/'+id)
//       .map(res =>res.json());
//   }
// }


