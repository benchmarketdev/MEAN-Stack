import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { SchoolService } from '../_services';
import { log } from 'util';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder,
    private router: Router,private schoolservice: SchoolService) { }
  schoolData=[];
  years=[];
  months=[
    {id:1,month:'Jan'},{id:1,month:'Feb'},{id:1,month:'Mar'},{id:1,month:'Apr'},
    {id:1,month:'May'},{id:1,month:'June'},{id:1,month:'July'},{id:1,month:'Aug'},
    {id:1,month:'Sep'},{id:1,month:'Oct'},{id:1,month:'Nob'},{id:1,month:'Dec'}
  ]
  weeks=[];

  stasticsForm: FormGroup;
  ngOnInit() {
      console.log('save page');
    
    // this.schoolservice.getSchools()
    // .subscribe(res => {
    //   this.schoolData = res;
    //   console.log(this.schoolData)
    // }, err => {
    //   console.log(err);
    // });

    this.stasticsForm = this.formBuilder.group({
      name: [""],
      year: [""],
      week: [""],
      month: ["", Validators.required],
      elecEuro: ["", Validators.required],
      elecKwh: ["", Validators.required],
      heatEuro: ["", Validators.required],
      heatKwh: ["", Validators.required],
      waterEuro: ["", Validators.required],
      waterLiter: ["", Validators.required],
    });

    for(var i=1990;i<2050;i++){
      this.years.push({
        id:i, year:i
      });
    }
    for(var i=1;i<=54;i++){
      this.weeks.push({
        id:i, week:i
      });
    }
    
  }

  stastics(){
      // console.log(this.stasticsForm.value);
      this.schoolservice.createSchoolSaveData(this.stasticsForm.value).subscribe(data => {
        // this.schoolService.schools.push()
        this.router.navigate(["dashboard"]);
      });
    }


}
