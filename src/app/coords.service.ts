import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Coords } from "./coords";
import { last } from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: "root"
})
export class CoordsService {
  token: string = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private coordsUrl = "https://team-buh-gok-server.herokuapp.com/api/coords";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  newCoords(coords: Coords): Observable<any> {
    return this.http
      .post<Coords>(this.coordsUrl, coords, this.httpOptions)
      .pipe(catchError(this.handleError<Coords>("newCoords")));
  }

  getAllCoords(): Observable<Coords[]> {
    return this.http
      .get<Coords[]>(this.coordsUrl, this.httpOptions)
      .pipe(catchError(this.handleError("fetchAllCoords", [])));
  }

  getUserCoords(): Observable<Coords[]> {
    return this.http
      .get<Coords[]>(`${this.coordsUrl}/owner`, this.httpOptions)
      .pipe(catchError(this.handleError("fetchUserCoords", [])));
  }

  getOneCoords(id: number): Observable<any> {
    return this.http
      .get<Coords>(`${this.coordsUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Coords>(`find coords id=${id}`)));
  }

  updateCoords(coords: Coords): Observable<any> {
    let newCoords = {
      latitude: coords.lat,
      longitude: coords.lng
    };
    return this.http
      .put(`${this.coordsUrl}/${coords.housingId}`, newCoords, this.httpOptions)
      .pipe(catchError(this.handleError<Coords>("updateCoords")));
  }

  deleteCoords(id: number): Observable<Coords> {
    return this.http
      .delete<Coords>(`${this.coordsUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Coords>("deleteCoords")));
  }
}
