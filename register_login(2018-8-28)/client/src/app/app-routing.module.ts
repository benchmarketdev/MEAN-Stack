import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AddComponent } from "./add/add.component";
import { SaveComponent } from "./save/save.component";
import { BlankComponent } from "./layout/blank/blank.component";
import { DetailComponent } from "./detail/detail.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";
import { ListComponent } from "./users/list/list.component";
import { UsereditComponent } from "./users/useredit/useredit.component";
import { AuthGuard } from "./_services/auth.guard"

const routes: Routes = [
  // , canActivate: [AuthGuard]
  { path: "", redirectTo: "/signin", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "blank", pathMatch: "full" },
      { path: "blank", component: BlankComponent },
      { path: "add", component: AddComponent },
      { path: "save", component: SaveComponent },
      { path: "detail/:id", component: DetailComponent },
      {
        path: "users", component: UsersComponent,
        children: [
          { path: "", redirectTo: "show", pathMatch: "full" },
          { path: "show", component: ListComponent },
          { path: "edit/:id", component: UsereditComponent },
        ]
      },
    ]
  },
  // { path: 'users', loadChildren: './users/users.module#UsersModule' },
  //   { path: "users", 
  //     component: UsersComponent,
  //     children: [
  //       { path: "", redirectTo: "show", pathMatch: "full" },
  //       { path: "show", component: ListComponent },
  //     ]
  // },
  {
    path: "signup",
    component: UserComponent,
    children: [{ path: "", component: SignUpComponent }]
  },
  { path: "signin", component: SignInComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
