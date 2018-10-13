import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './auth.service';

export const appRoutes: Routes = [
  { path : '', redirectTo:'/login', pathMatch : 'full'},
  { path: 'signup', component: UserComponent, children: [{ path: '', component: SignupComponent }]},
  { path: 'login', component: UserComponent,children: [{ path: '', component: SigninComponent }]},
  { path : 'dashboard', component: ContactsComponent, canActivate: [AuthGuard]}
  // { path : 'dashboard', component: ContactsComponent}
];
