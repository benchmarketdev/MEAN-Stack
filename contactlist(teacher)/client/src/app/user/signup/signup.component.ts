import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
  ){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onSignup(email:string, password: string){
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/api/contact', {email: email, password: password}, {headers:headers})
      .map(user => {
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.router.navigate([this.returnUrl]);
          return user;
      })
      .subscribe(res =>{
        console.log(res);
      });
    }

}
