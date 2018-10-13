import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AlertService, routerTransition } from "../../_services";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService],
  animations: [routerTransition()]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  imageUrl: string = "/assets/img/default.png";
  fileToUpload: File = null;
  sendData:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    //show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  //   passValidator(control: AbstractControl){
  //       if(control &&  (control.value !== null || control.value !== undefined)){
  //           const cnfpassValue = control.value;

  //           const passControl = control.root.get('password');
  //           if(passControl){
  //               const passValue = passControl.value;
  //               if(passValue !== cnfpassValue || passValue == ''){
  //                   return {
  //                       isError: true
  //                   }
  //               }
  //           }
  //       }
  //   }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
///
this.sendData = {
  email: this.registerForm.value.email,
  fullName: this.registerForm.value.name,
  password: this.registerForm.value.password,
  imageFile: this.fileToUpload

}

///Upload image
    // this.userService.postFile(this.sendData)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.alertService.success('Registration successful', true);
    //       this.imageUrl = "/assets/img/default.png";
    //       localStorage.setItem('currentUser', JSON.stringify(data));
    //       this.router.navigate(['/signin']);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
////end

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.router.navigate(['/signin']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });


    }

}
