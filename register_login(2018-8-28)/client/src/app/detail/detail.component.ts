import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SchoolService } from "../_services";
import { School } from "../_models";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 school:School;
 param1: string;
schoolData=[];
schoolDatas=[];
  constructor(
    private SchoolService:SchoolService,
    private route: ActivatedRoute,
    private location:Location

  ) { }

  ngOnInit() {
    this.getHero();
    // const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    this.param1 = this.route.snapshot.params.id;
      // In a real app: dispatch action to load the details here.
  //  });
    console.log('daaf')
    console.log(this.param1);
  }

  getHero(): void {
    // const _id = +this.route.snapshot.paramMap.get('_id');
    // console.log(_id)
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id)
    // this.SchoolService.getSchool(id)
    //   .subscribe(res => this.school = res);
    // this.param1 = this.route.snapshot.params.id;
    // this.SchoolService.getSchoolDatas()
    // .subscribe(res=>res.json());
    this.param1 = this.route.snapshot.params.id;
    console.log(this.param1)

    this.SchoolService.getSchoolDatasById(this.param1)
    .subscribe(res => {
      this.schoolDatas = res;
     
      console.log(this.schoolDatas)
    }, err => {
      console.log(err);
    });
    // for(var i=1; i<=this.schoolDatas.length;i++){
    //   this.schoolData.push
    // }
    // this.route.queryParams.subscribe(params=>{
    //   this.param1 = params['id'];
    // })
  }

  goBack(): void {
    this.location.back();
  }

}
