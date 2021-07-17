import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'node-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User [] |undefined;

  constructor( private router: Router,
               private usersService: UsersService) { }

  ngOnInit(): void {
   this.getUsers();
  }
  getUsers() : void{
    this.usersService.getUsers()
            .pipe(first())
            .subscribe(users => this.users = users);
  }

  editUser( id :string):void {
     let link=['edit-user/'+id];
     this.router.navigate(link);
  }

  deleteUser(id:string){
    let link=['delete-user/'+id];
    this.router.navigate(link);
  }
}

