import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import {Listing} from "./listing"

@Injectable({
  providedIn: 'root'
})
export class ListingService {

token:string=localStorage.getItem("token")

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private listingUrl = " https://team-buh-gok-server.herokuapp.com/api/housing";
  
  private userListingsUrl = " https://team-buh-gok-server.herokuapp.com/api/housing/owner/id";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  listing(listing: Listing): Observable<any> {
    return this.http
      .post<Listing>(`${this.listingUrl}`, listing, this.httpOptions)
      .pipe(catchError(this.handleError<Listing>("listing")))
  }

}