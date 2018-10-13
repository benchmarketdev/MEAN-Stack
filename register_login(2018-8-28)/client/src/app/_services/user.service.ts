import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent,throwError } from 'rxjs';
import { map, filter, scan,catchError, tap, } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
      };

    getAll() {
        return this.http.get<User[]>(`${environment.baseUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.baseUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.baseUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.baseUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/users/` + id);
    }

    postFile(data: any){

        return this.http.post(`${environment.baseUrl}/users/register`, data);
       
    }
}