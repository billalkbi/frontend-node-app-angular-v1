import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
      this.http.post(this.api+'/users',{email: email, password: password}).subscribe(
        (signupData:any)=>{
          if(signupData.status===201){
             //authentifier l'utilisateur
             this.signin(email, password)
             .then(()=>{resolve(true)})
             .catch((err)=>{reject(err)});
          }else{
            reject(signupData.message);
          }


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
         (authData: any)=>{
           this.token=authData.token;
           this.userId=authData.userId;
           this.isAuth$.next(true);
           console.log(authData);
           resolve(true);

         },
          (err)=>{
            reject(err)
          }
      )
    })

  }
  logout(){}

}
