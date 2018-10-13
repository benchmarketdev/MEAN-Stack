import { Component, OnInit } from '@angular/core';
import { SchoolService } from "../../_services";



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu: string = '';
  schoolData=[];
  clickedId:any;
  constructor(private schoolservice: SchoolService) { }

    // @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 

  ngOnInit() {
    console.log('school name sidebar')
    // this.schoolservice.getSchools()
    // .subscribe(res => {
    //   this.schoolData = res;
    //   console.log(this.schoolData)
    // }, err => {
    //   console.log(err);
    // });
  }

  expand(id){

  }
  addExpandClass(element: any,_id:any) {

    this.clickedId = _id;

    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}
}
