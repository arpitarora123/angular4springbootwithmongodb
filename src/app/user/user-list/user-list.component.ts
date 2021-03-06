import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private userService: UserService) { }
  addUser() {
    this.userService.addUser(this.user);
  }

  ngOnInit() {
    // this.user = new User();
    // this.user = {
    //   name: 'Rashmi Kannaujia'
    // };
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
      });
  }
}
