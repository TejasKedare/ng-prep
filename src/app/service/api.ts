import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor (private http: HttpClient) {}

  get<T>(url:string): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError(this.handleError)
    )
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url,data).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: Error) {
    console.error('Api Error',error)
    return throwError(()=> error)
  }
}