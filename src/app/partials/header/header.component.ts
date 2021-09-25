import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotifierService } from 'src/app/services/notifier.service';
import { SigninComponent } from 'src/app/components/auth/signin/signin.component';

@Component({
  selector: 'node-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:any=localStorage.getItem('token');
  typeUser:any;
  loginSub: Subscription | undefined;
  constructor( private router: Router,
    private notifierService : NotifierService
              ) {}

  ngOnInit(): void {
    this.loginSub=this.notifierService.refreshLoginStatuseNotifier$.subscribe(res=>{
      this.isLogged=localStorage.getItem('token');
    })
  }
  LogOut(){
    localStorage.removeItem('token');
    this.isLogged=localStorage.getItem('token');
    this.router.navigate(['/signin'])
   }
   ngOnDestroy(){
     if(this.loginSub){
       this.loginSub.unsubscribe();
     }
   }
}
