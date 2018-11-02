import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";;
import { User } from "./user"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = localStorage.getItem("token");

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  userUrl = "https://team-buh-gok-server.herokuapp.com/api/user";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUser(id: number): Observable<any> {
    return this.http
    .get<User>(`${this.userUrl}/${id}`, this.httpOptions)
    .pipe(catchError(this.handleError("getUser")));
  }

}
