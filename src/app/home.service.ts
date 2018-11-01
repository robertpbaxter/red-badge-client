import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Home } from "./home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  token:string=localStorage.getItem("token")

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private homeUrl = " https://team-buh-gok-server.herokuapp.com/api/housing";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  home(): Observable<Home[]> {
    return this.http
      .get<Home[]>(this.homeUrl, this.httpOptions)
      .pipe(catchError(this.handleError("home", [])));
  }

}
