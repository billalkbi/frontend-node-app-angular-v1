import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit  {
  signInForm : any;
  typeUser:any;
   hide:any= true;
   errorMessage: any;
  constructor(private formBuilder : FormBuilder,
              private router: Router,
              public authService : AuthService) { }

ngOnInit(): void{
  this.signInForm= this.formBuilder.group({
    username : this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),
    password : this.formBuilder.control("",[ Validators.required, Validators.minLength(10)])
  })
}


login() {

    this.authService.login(this.signInForm.value).subscribe(
      (res: any) => {
        this.typeUser=res.data.type;
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home')
      },
      err=>{  this.errorMessage= err.error();

      });
}

}
