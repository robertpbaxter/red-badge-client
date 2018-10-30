import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  private authUrl = "https://team-buh-gok-server.herokuapp.com/api/user";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  login(user: User): Observable<any> {
    return this.http
      .post<User>(`${this.authUrl}/login`, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>("login")));
  }

  signup(user: User): Observable<any> {
    return this.http
      .post<User>(`${this.authUrl}/signup`, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>("signup")));
  }
}
