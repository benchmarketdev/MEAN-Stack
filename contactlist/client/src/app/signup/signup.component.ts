import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { routerTransition } from '../router.animations';
import {AuthenticationService} from '../shared/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { UserService } from '../user.service';
import {User} from '../shared/model/user';
import { delay } from 'q';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers:[UserService,AuthenticationService]
})
export class SignupComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;
    submitted = false; 
    returnUrl: string;

    users:User[];
    user:User;
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authenticationService:AuthenticationService) { }

    ngOnInit() {
        let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
        this.registerForm = this.formBuilder.group({
            username:['', [Validators.required, Validators.pattern(emailRegex)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
      
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        //register in database(MongoDB)
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        
    }
}
