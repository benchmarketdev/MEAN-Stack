import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {SchooldataService} from '../../schooldata.service';
import {Schooldata} from '../../contact';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [SchooldataService]
})
export class FormComponent implements OnInit {
    schooldatas:Schooldata[];
    schooldata:Schooldata;
    school_id:String;
    year:String;
    week:String;
    month:String;
    elect_eur:String;
    elect_kwh:String;
    heating_eur:String;
    heating_kwh:String;
    water_eur:String;
    water_kwh:String;

    constructor(private schooldataService: SchooldataService) {}

    addSchooldata()
    {
      const newSchooldata ={
        school_id:this.school_id,
        year:this.year,
        week:this.week,
        month:this.month,
        elect_eur:this.elect_eur,
        elect_kwh:this.elect_kwh,
        heating_eur:this.heating_eur,
        heating_kwh:this.heating_kwh,
        water_eur:this.water_eur,
        water_kwh:this.water_kwh,
      }
      console.log(newSchooldata);
      this.schooldataService.addSchooldata(newSchooldata)
      .subscribe(schooldata=>{
        this.schooldatas.push(schooldata);
        this.schooldataService.getSchooldatas()
        .subscribe(schooldatas => this.schooldatas = schooldatas);
      });
    }

    deleteSchooldata(id:any)
    {
      var schooldatas = this.schooldatas;
      this.schooldataService.deleteSchooldata(id)
        .subscribe(data=>{
          if(data.n==1)
          {
            for(var i=0;i<schooldatas.length;i++)
            {
              if(schooldatas[i]._id == id)
              {
                schooldatas.splice(i,1);
              }
            }
          }
        });
    }
    

    ngOnInit() {
        this.schooldataService.getSchooldatas()
        .subscribe(schooldatas => this.schooldatas = schooldatas);
    }
}
