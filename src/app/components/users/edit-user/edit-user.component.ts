import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'node-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  signUpForm: any;
  errorMessage: string |undefined;
  user : User |undefined;





  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.usersService.getUser(id);
    /*.subscribe((user: any)=> this.user= user );*/
  }
  onSubmit(){}


}
