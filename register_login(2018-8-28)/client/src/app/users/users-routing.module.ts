import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from './list/list.component';
import { UsersComponent } from "./users.component";
const routes: Routes = [
  {
  path: '',   component: UsersComponent,
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [RouterModule]
})
export class UsersRoutingModule { }
