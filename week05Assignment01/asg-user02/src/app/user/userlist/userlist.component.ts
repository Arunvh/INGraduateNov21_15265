import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';
import { UserService } from '../service/user.service';
import { IUser } from '../user/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getusers();
  }
  getusers() {
    this.userService.getUsers().subscribe(allUsers=>this.users = allUsers);
    console.log(this.users);
  }

}