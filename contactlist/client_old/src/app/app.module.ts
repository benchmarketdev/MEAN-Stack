import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { appRoutes } from './routes';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AddschoolComponent } from './addschool/addschool.component';
import { ListschoolComponent } from './listschool/listschool.component';
import { EditschoolComponent } from './editschool/editschool.component';
import { ModeuleComponent } from './modeule/modeule.component';  
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    SidebarComponent,
    AddschoolComponent,
    ListschoolComponent,
    EditschoolComponent,
    ModeuleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
