import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "./user";
import { pipe } from "@angular/core/src/render3";

@Injectable({
  providedIn: "root"
})
export class UserService {
  token: string = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

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

  getSelf(): Observable<User> {
    return this.http
      .get<User>(this.userUrl, this.httpOptions)
      .pipe(catchError(this.handleError<User>("getSelf")));
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<User>("getUser")));
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`${this.userUrl}/${user.id}`, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>("updateUser")));
  }

  deleteUser(id: number): Observable<User> {
    return this.http
      .delete<User>(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<User>("deleteUser")));
  }
}
