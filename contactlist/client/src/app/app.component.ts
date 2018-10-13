import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UsersService } from './users.service';
import { User } from '../app/shared/model/user';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:[UsersService]
})
export class AppComponent implements OnInit {
    currentUser:User;
    users:User[] = [];
    constructor(private usersService: UsersService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    // deleteUser(id: number) {
    //     this.usersService.delete(id).pipe(first()).subscribe(() => { 
    //         this.loadAllUsers() 
    //     });
    // }

    private loadAllUsers() {
        this.usersService.getUsers().pipe(first()).subscribe(users => { 
            this.users = users;
        });

    }
}
