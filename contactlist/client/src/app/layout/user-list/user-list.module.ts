import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule,
            UserListRoutingModule,
            PageHeaderModule,
            NgbModule.forRoot(),
            FormsModule,
            ReactiveFormsModule
    ],

    declarations: [UserListComponent]
})
export class UserListModule {}
