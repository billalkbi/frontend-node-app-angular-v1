import { Component,  Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'node-edit-user',
  templateUrl: './edit-user.dialog.component.html',
  styleUrls: ['./edit-user.dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  hide = true;
  errorMessage: any;
   userEditForm= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    adresse: new FormControl(''),
    type: new FormControl(''),
    dateBirth: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(private usersService: UsersService,
              public dialogRef: MatDialogRef<EditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public id: any
) { }

onNoClick(): void {
  this.dialogRef.close();
 }


  ngOnInit() {

    this.usersService.getUser(this.id)
      .subscribe(user=>{
        this.userEditForm= new FormGroup({
          firstname: new FormControl(user['firstname'],[ Validators.required, Validators.minLength(5)]),
          lastname: new FormControl(user['lastname'],[ Validators.required, Validators.minLength(5)]),
          adresse: new FormControl(user['adresse'],[ Validators.required, Validators.minLength(5)]),
          type :new FormControl(user['type'],[ Validators.required]),
          dateBirth: new FormControl(user['dateBirth'],[ Validators.required,]),
           username: new FormControl(user['username'],[ Validators.required, Validators.minLength(5)]),
           email: new FormControl(user['email'],[ Validators.required, Validators.email, Validators.minLength(5)]),
           password: new FormControl(user['password']),
        })
      })
 }



 saveEdit() {

    this.usersService.updateUser(this.id,this.userEditForm.value)  .subscribe(() => {
      console.log('Data updated successfully!')

    }, (err) => {
          this.errorMessage=err;
           console.log(this.userEditForm.value);
       });

  this.dialogRef.close();


  }




}

