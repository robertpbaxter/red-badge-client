import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Message } from "./message";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  token: string = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private messageUrl = "https://team-buh-gok-server.herokuapp.com/api/message";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getInboxMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${this.messageUrl}/inbox`, this.httpOptions)
      .pipe(catchError(this.handleError("getInboxMessages", [])));
  }

  getOutboxMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${this.messageUrl}/outbox`, this.httpOptions)
      .pipe(catchError(this.handleError("getOutboxMessages", [])));
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http
      .post<Message>(`${this.messageUrl}`, message, this.httpOptions)
      .pipe(catchError(this.handleError<Message>("sendMessage")));
  }

  findMessage(id: number): Observable<Message> {
    return this.http
      .get<Message>(`${this.messageUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Message>("findMessage")));
  }

  deleteMessage(id: number): Observable<Message> {
    return this.http
      .delete<Message>(`${this.messageUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Message>("deleteMessage")));
  }

  markMessagesAsRead(): Observable<any> {
    return this.http
      .put<Message>(this.messageUrl, "", this.httpOptions)
      .pipe(catchError(this.handleError<Message>("markMessagesAsRead")));
  }

  fetchNotifcations(): Observable<number> {
    return this.http
      .get<number>(`${this.messageUrl}/new`, this.httpOptions)
      .pipe(catchError(this.handleError<number>("fetchNotificatons")));
  }

  deleteSelfMessages(): Observable<Message> {
    return this.http
      .delete<Message>(`${this.messageUrl}/deleteaccount`, this.httpOptions)
      .pipe(catchError(this.handleError<Message>("deleteSelfMessages")));
  }
}
