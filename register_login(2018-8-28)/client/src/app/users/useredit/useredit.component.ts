import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AlertService, AuthenticationService, routerTransition } from '../../_services';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  providers: [UserService],
  animations: [routerTransition()]
})
export class UsereditComponent implements OnInit {
  editForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  userDataById: any;
  sendData: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required]
    });
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.getUserDetails(this.route.snapshot.params['id']);
  }

  get f() { return this.editForm.controls; }

  getUserDetails(id) {

    this.userService.getById(id)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          console.log('successssss');
          this.userDataById = data;
          console.log(this.userDataById);
          this.editForm.get('name').setValue(this.userDataById.fullName);
          this.editForm.get('email').setValue(this.userDataById.email);

          // this.router.navigate(['/signin']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }


    this.loading = true;

    this.sendData = {
      id: this.route.snapshot.params['id'],
      email: this.editForm.value.email,
      fullName: this.editForm.value.name
    }

    this.userService.update(this.sendData)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard/users']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
