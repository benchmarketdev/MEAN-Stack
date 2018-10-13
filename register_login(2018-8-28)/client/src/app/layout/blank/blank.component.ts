import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../_services';
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  constructor(private schoolservice: SchoolService) { }

  ngOnInit() {
      console.log('blank page');

    // this.schoolservice.getSchools()
    // .subscribe(res => {
    //   this.schoolservice = res;
    // }, err => {
    //   console.log(err);
    // });
  }

}
