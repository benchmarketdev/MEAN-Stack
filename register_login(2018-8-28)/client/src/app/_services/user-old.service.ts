import { Injectable } from '@angular/core';
import { User } from "./user.model";

import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';

import { School } from "../_models";
// import {Http,Headers} from '@angular/http';
// import { Observable, of, throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent,throwError } from 'rxjs';
import { map, filter, scan,catchError, tap, } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  }
  
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  // postUser(user: User){
  //   return  this.http.post(environment.baseUrl+'register' ,user, httpOptions);
  // }

  postUser(data: any): Observable<any> {
    return this.http.post(environment.baseUrl+'register', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
