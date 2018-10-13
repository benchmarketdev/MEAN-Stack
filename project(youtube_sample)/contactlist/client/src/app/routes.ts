import { Routes } from '@angular/router'
import { ContactsComponent } from './contacts/contacts.component';


export const appRoutes: Routes = [
  // { path : '', redirectTo:'/login', pathMatch : 'full'},
  // { path: 'signup', component: UserComponent, children: [{ path: '', component: SignupComponent }]},
  // { path: 'login', component: UserComponent,children: [{ path: '', component: SigninComponent }]},
  // { path : 'dashboard', component: ContactsComponent, canActivate: [AuthGuard]}
  { path : '', component: ContactsComponent}
];
