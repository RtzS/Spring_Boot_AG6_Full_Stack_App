import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['./user.component.css']
})
export class AddUserComponent {
  public userForm: FormGroup;
  user: User = new User();

  constructor(public formBuilder: FormBuilder, private router: Router, private userService: UserService) {
        this.initializeform();
  }

  createUser(): void {
    let data = this.userForm.getRawValue();
    this.userService.createUser(data)
        .subscribe( data => {
          alert("User created successfully.");
          this.userForm.reset();
        });
  };
  
  public initializeform(): any {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
}
