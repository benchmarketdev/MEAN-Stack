import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService, EmployeeService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;

  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;

  employees: Employee[];
  employee: Employee;

  private searchTerms = new Subject<string>();

  constructor(private contactService: ContactService, private employeeService: EmployeeService) {}

  deleteContact(id:any){
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data =>{
      if(data.n==1){
        for(var i=0; i < contacts.length; i++)
        {
          if(this.contacts[i]._id==id){
            this.contacts.splice(i,1);
          }
        }
      }
    });
  }

  search(keyword:any){
    var employees = this.employees;
    console.log(keyword);

    for(var i=0; i < employees.length; i++)
    {
      var name = this.employees[i].commit['author']['name'];
      console.log(name);
      console.log(name.search(keyword));
      if (name.search(keyword)<0){
        this.employees.splice(i,1);
      }
    }
  }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts);

    this.employeeService.getEmployeeLists()
    .subscribe(employees => this.employees = employees);
  }
}
