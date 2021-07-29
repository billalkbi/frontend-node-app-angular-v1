import { HttpClient } from '@angular/common/http';
import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import {first, map, tap} from 'rxjs/operators';

import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { EditUserDialogComponent } from './edit-user/edit-user.dialog.component';
import { DeleteUserDialogComponent } from './delete-user/delete-user.dialog.component';
import { AddUserDialogComponent } from './add-user/add-user.dialog.component';

import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'node-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isPopupOpened = true;


  users:User []=[];
  editUserForm= new FormGroup({
    firstname: new FormControl(''),
    adresse: new FormControl(''),
    lastname: new FormControl(''),
    dateBirth: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),

  })
displayedColumns: string[] = ['id', 'firstname', 'lastname', 'adresse', 'dateBirth','email', 'username', 'action'];

  constructor(public dialog: MatDialog,

               private usersService: UsersService) { }

ngOnInit(): void {
   this.getUsers();
  }

getUsers() : void{
    this.usersService.getUsers()
            .pipe(first())
            .subscribe(users => this.users = users);
  }

  addUser(){
    this.isPopupOpened = true;
        const dialogRef = this.dialog.open(AddUserDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  editUser(id: string) {
    this.isPopupOpened = true;
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: id

    });
    console.log(id);
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteUser(id: string) {
    this.isPopupOpened = true;
        const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: id

    });
    console.log(id);
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }



}










