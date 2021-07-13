import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: any;
errorMessage: string |undefined;
  constructor(private formBuilder : FormBuilder,
              private ngZone: NgZone,
              private router: Router,
              private auth : AuthService) { }

  ngOnInit(): void {
    this.signInForm= this.formBuilder.group({
      email: [null,[Validators.required, Validators.email]],
      password: [null,Validators.required]
    });
  }

  onSubmit(): any {
    this.auth.signin(this.signInForm.value)
    .subscribe(() => {
        console.log('user connected ')
        this.ngZone.run(() => this.router.navigateByUrl('/produits'))
      }, (err) => {
        console.log(err);
    });
  }

}
