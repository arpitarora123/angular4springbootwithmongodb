import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  users: User[];
  user: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user.name = 'Arpit';
  }

  addUser() {
    console.log('Adding user ' + this.user);
    console.log('Adding user name ' + this.user.name);
    if (this.user) {
      this.userService.addUser(this.user).subscribe();
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      console.log('Getting Users ' + JSON.stringify(users));
      this.users = users;
    });
  }
}
