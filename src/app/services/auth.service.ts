import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private api= environment.api;
token: string | undefined;
userId: string | undefined;
isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  signup(email: string, password: string){
    return new Promise((resolve, reject)=>{
      this.http.post(this.api+'/users/singup',{email: email, password: password}).subscribe(
        ()=>{
          //authentifier l'utilisateur

        },
       (err)=>{
         reject(err)
        }
      )

    })


  }

  signin(email: string, password: string){
    return new Promise ((resolve, reject)=>{
      this.http.post(this.api+'/users/login',{email: email, password: password}).subscribe(
         (authData:{taken :string, userId:string})=>{

         },
          (err)=>{
            reject(err)
          }
      )
    })

  }

  logout(){}

}
