import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'node-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private router: Router,
               private usersSrvce: UsersService) { }

  ngOnInit(): void {
  }
  users = [
    { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', address: 'adresse' , dateBirth: '01/01/1111' , username: 'Username' , password: 'password' },
    { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', address: 'adresse' , dateBirth: '01/01/1111' , username: 'Username' , password: 'password' },
    {firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', address: 'adresse' , dateBirth: '01/01/1111' , username: 'Username' , password: 'password'},
    { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', address: 'adresse' , dateBirth: '01/01/1111' , username: 'Username' , password: 'password' },
    {firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', address: 'adresse' , dateBirth: '01/01/1111' , username: 'Username' , password: 'password'}
];

getUsers(){

}
goEdit(user: any):void {
  /*let link=['edit-user/'+user.username];
  this.router.navigate(link);*/
  this.router.navigateByUrl('edit-user')

}
}

