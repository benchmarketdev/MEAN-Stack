import { Component, OnInit,AfterViewInit,ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {SchooldataService} from '../../schooldata.service';
import {Schooldata} from '../../contact';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers: [SchooldataService]
})
export class SchooldataComponent implements OnInit {
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
      // your other code
     this.schooldataService.getSchooldatas()
        .subscribe(schooldatas => this.schooldatas = schooldatas);
    }
}
