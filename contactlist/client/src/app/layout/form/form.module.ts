import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule,
         FormRoutingModule,
          PageHeaderModule,
           NgbModule.forRoot(),
           FormsModule,
           ReactiveFormsModule
    ],

    declarations: [FormComponent]
})
export class FormModule {}
