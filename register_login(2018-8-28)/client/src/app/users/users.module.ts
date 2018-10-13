import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    CommonModule, UsersRoutingModule
  ],
  declarations: [UsersComponent, ListComponent]
})
export class UsersModule { }
