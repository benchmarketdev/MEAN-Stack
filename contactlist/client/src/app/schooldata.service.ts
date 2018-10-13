import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
// import {Schooldata} from './contact';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
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
