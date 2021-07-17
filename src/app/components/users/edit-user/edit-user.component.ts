import { Component,  NgZone,  OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router,  } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'node-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  getId: any;
  errorMessage: any;

  editUserForm= new FormGroup({
    firstname: new FormControl(''),
    adresse: new FormControl(''),
    lastname: new FormControl(''),
    dateBirth: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),

  })




  constructor(private activatedRoute: ActivatedRoute,
              private usersService: UsersService,
) {}

  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
     this.usersService.getUser(this.getId)
       .subscribe(user=>{
         this.editUserForm= new FormGroup({
           firstname: new FormControl(user['firstname']),
           adresse: new FormControl(user['adresse']),
            lastname: new FormControl(user['lastname']),
            dateBirth: new FormControl(user['dateBirth']),
            username: new FormControl(user['username']),
            email: new FormControl(user['email']),
            password: new FormControl(user['password']),
         })
       })
  }

  onSubmit(): any {
    this.usersService.updateUser(this.getId,this.editUserForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')

      }, (err) => {
        this.errorMessage=err;
        console.log(this.editUserForm.value);

    });
  }
}

