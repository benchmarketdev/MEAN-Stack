import { Routes } from '@angular/router'
import { ContactsComponent } from './contacts/contacts.component';


export const appRoutes: Routes = [
  // { path : '', redirectTo:'/login', pathMatch : 'full'},
   { path: 'save', component: ContactsComponent},
   { path: 'edit', component: ContactsComponent},
   { path : 'list', component: ContactsComponent},
   { path : '', component: ContactsComponent}
];
