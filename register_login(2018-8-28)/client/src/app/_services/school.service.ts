import { Injectable } from '@angular/core';
import { School } from "../_models";
// import {Http,Headers} from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
// import { Observable, of, throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent,throwError } from 'rxjs';
import { map, filter, scan,catchError, tap, } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  schools:School[];
  schoolDatas=[];


  constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:3000/api/';

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
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

    /** GET heroes from the server */
  createSchool (data): Observable<any> {
  return this.http.post<any>(environment.baseUrl+'school', data, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }


  getSchools(): Observable<any> {
    return this.http.get(environment.baseUrl+'schools', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getSchoolDatas(): Observable<any> {
    return this.http.get(environment.baseUrl+'schooldatas', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getSchoolDatasById(id: any): Observable<any> {
    // console.log(this.baseUrl+'s'+id)
    console.log('ssssssssssssssssss')
    console.log(environment.baseUrl+'schooldatas/'+id)
    return this.http.get(environment.baseUrl+'schooldatas', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  createSchoolSaveData(data): Observable<any> {
    return this.http.post(environment.baseUrl+'schoolData', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // getSchool(id: number): Observable<School> {


  //   // TODO: send the message _after_ fetching the hero
  //   // this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(school => school.id === id));
  // }


}
