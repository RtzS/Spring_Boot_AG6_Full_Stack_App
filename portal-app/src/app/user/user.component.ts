import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [{
    id: '0',
    firstName: 'Test_FirstName',
    lastName: 'Test_LastName',
    email: 'test@gamil.com'
  }];

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
     this.getUserGridData();
  };

  /**Method to get users list */
  getUserGridData() {
    this.userService.getUsers()
    .subscribe( data => {
      if (data.length) {
        this.users = data;
      }
    });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


