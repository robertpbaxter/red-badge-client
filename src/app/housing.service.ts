import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Housing } from "./housing";

@Injectable({
  providedIn: "root"
})
export class HousingService {
  token: string = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private housingUrl = " https://team-buh-gok-server.herokuapp.com/api/housing";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  newHousing(housing: Housing): Observable<any> {
    return this.http
      .post<Housing>(`${this.housingUrl}`, housing, this.httpOptions)
      .pipe(catchError(this.handleError<Housing>("newHousing")));
  }

  getAllHousing(): Observable<Housing[]> {
    return this.http
      .get<Housing[]>(this.housingUrl, this.httpOptions)
      .pipe(catchError(this.handleError("getAllHousing", [])));
  }

  getUserHousing(): Observable<Housing[]> {
    return this.http
      .get<Housing[]>(`${this.housingUrl}/owner`, this.httpOptions)
      .pipe(catchError(this.handleError("getUserHousing", [])));
  }

  updateHousing(housing: Housing): Observable<any> {
    return this.http
      .put(`${this.housingUrl}/${housing.id}`, housing, this.httpOptions)
      .pipe(catchError(this.handleError<Housing>("updateHousing")));
  }

  deleteHousing(id: number): Observable<Housing> {
    return this.http
      .delete<Housing>(`${this.housingUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Housing>("deleteHousing")));
  }
}
