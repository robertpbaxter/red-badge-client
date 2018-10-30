import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Ticket } from "./ticket"

@Injectable({
  providedIn: 'root'
})
export class TicketService {

token:string=localStorage.getItem("token")

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private supportUrl = " https://team-buh-gok-server.herokuapp.com/api/ticket";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  support(ticket: Ticket): Observable<any> {
    return this.http
      .post<Ticket>(`${this.supportUrl}`, ticket, this.httpOptions)
      .pipe(catchError(this.handleError<Ticket>("support")))
  }

}
