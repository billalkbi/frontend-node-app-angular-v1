import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninComponent } from '../../auth/signin/signin.component';

@Component({
  selector: 'node-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:any=localStorage.getItem('token');
  typeUser:any;
  constructor( private router: Router,
              ) {}

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
   }
}
