import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/users';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API: string = 'http://localhost:3000/api';
token: string | undefined;
userId: string | undefined;
isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  signin(user: User): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    return this.http.post(API_URL,user)
      .pipe(
        catchError(this.handleError)
      )
  }

  signup(user: User): Observable<any> {
    let API_URL = `${this.REST_API}/users`;
    return this.http.post(API_URL,user)
      .pipe(
        catchError(this.handleError)
      )
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  logout(){}

}
