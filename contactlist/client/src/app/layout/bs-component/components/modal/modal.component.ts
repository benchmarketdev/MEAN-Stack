import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {SchoolService} from '../../../../school.service';
import {School} from '../../../../contact';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    providers: [SchoolService]
})
export class ModalComponent{
    closeResult: string;
    schoolname:String;
    schools:School[];
    school:School;

    constructor(private schoolService: SchoolService) { }

  addSchool()
  {
    const newSchool ={
      schoolname:this.schoolname,
    }
    this.schoolService.addSchool(newSchool)
    .subscribe(school=>{
      this.schools.push(school);
      this.schoolService.getSchools()
      .subscribe(schools => this.schools = schools);
    });
  }
  

  deleteSchool(id:any)
  {
    var schools = this.schools;
    this.schoolService.deleteSchool(id)
      .subscribe(data=>{
        if(data.n==1)
        {
          for(var i=0;i<schools.length;i++)
          {
            if(schools[i]._id == id)
            {
              schools.splice(i,1);
            }
          }
        }
      });
  }

  ngOnInit() {
    this.schoolService.getSchools()
      .subscribe(schools => this.schools = schools);
  }
}


