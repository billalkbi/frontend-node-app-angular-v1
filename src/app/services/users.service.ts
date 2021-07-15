import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  REST_API: string = environment.ENDPOINTS.api

  users : User[]=[];
  userSub =new Subject<User[]> ();

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.REST_API}/users`).pipe(
        catchError(this.handleError)
      )
}


  getUser(id: number): Observable<User> {
    const url = `${this.REST_API}/users/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );

  }

  updateUser(id:any, user:User): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.http.put(API_URL,user)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteUser(id: string): Observable<User> {
    const url = `${this.REST_API}/users/${id}`;
    return this.http.delete<User>(url).pipe(
      catchError(this.handleError)
    )}



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
}
