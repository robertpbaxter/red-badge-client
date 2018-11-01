import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Ticket } from "./ticket";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  token: string = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private ticketUrl = "https://team-buh-gok-server.herokuapp.com/api/ticket";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  newTicket(ticket: Ticket): Observable<any> {
    return this.http
      .post<Ticket>(this.ticketUrl, ticket, this.httpOptions)
      .pipe(catchError(this.handleError<Ticket>("newTicket")));
  }

  getTickets(): Observable<Ticket[]> {
    return this.http
      .get<Ticket[]>(this.ticketUrl, this.httpOptions)
      .pipe(catchError(this.handleError("fetchTickets", [])));
  }

  findTicket(id: number): Observable<Ticket> {
    return this.http
      .get<Ticket>(`${this.ticketUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Ticket>(`find ticket id=${id}`)));
  }

  updateTicket(id: number, ticket: Ticket): Observable<any> {
    return this.http
      .put(`${this.ticketUrl}/${id}`, ticket, this.httpOptions)
      .pipe(catchError(this.handleError<Ticket>("updateTicket")));
  }

  deleteTicket(id: number): Observable<Ticket> {
    return this.http
      .delete<Ticket>(`${this.ticketUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Ticket>("deleteTicket")));
  }
}
