import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm: any;
errorMessage: string |undefined;
  constructor(private formBuilder : FormBuilder,
              private route: Router,
              private auth : AuthService) { }

  ngOnInit(): void {
    this.signUpForm= this.formBuilder.group({
      email: [null,[Validators.required, Validators.email]],
      password: [null,Validators.required]
    });
  }

  onSubmit(){
    const email= this.signUpForm.get('email').value;
    const password= this.signUpForm.get('password').value;
    this.auth.signup(email, password)
    .then(()=>{
      this.route.navigate(['/produits']);
    })
    .catch(
       (err)=>{
         this.errorMessage=err.message;
       }
    )
    console.log(this.signUpForm.value)

  }

}
