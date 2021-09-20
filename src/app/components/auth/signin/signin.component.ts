import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { NotifierService } from 'src/app/services/notifier.service';

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
              protected notificationService : NotificationService,
              public authService : AuthService,
              private notifierService : NotifierService) { }

ngOnInit(): void{
  this.signInForm= this.formBuilder.group({
    username : this.formBuilder.control("",[ Validators.required, Validators.minLength(5)]),
    password : this.formBuilder.control("",[ Validators.required, Validators.minLength(10)])
  })
}


login() {

    this.authService.login(this.signInForm.value).subscribe(
      (res: any) => {
        console.log(res.user);

        localStorage.setItem('token', res.token);
        this.notifierService.refreshLoginStatusFunc();
        this.router.navigateByUrl('/home/acceuil')
      },
      err=>{  this.errorMessage= err;
        this.notificationService.warn('echec de connexion veuillez réesseyer!');

      });
}

}
