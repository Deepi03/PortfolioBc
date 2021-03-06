import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Observable ,throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IBanner, IPhones } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl : string = 'assets/';

  constructor(private http:HttpClient) { }

    getBanner() : Observable<IBanner>{
      return this.http.get<IBanner>(this.baseUrl + 'phones/banner.json').
      pipe(catchError(this.handleError))
    }
    getPhones() : Observable<IPhones[]>{
      return this.http.get<IPhones[]>(this.baseUrl + 'phones/phones.json')
     .pipe(catchError(this.handleError))
    }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {

        // A client-side or network error occurred. Handle it accordingly.

        console.error('An error occurred:', error.error);

      } else {

        // The backend returned an unsuccessful response code.

        // The response body may contain clues as to what went wrong.

        console.error(

          `Backend returned code ${error.status}, body was: `, error.error);

      }

      // Return an observable with a user-facing error message.

      return throwError(

        'Something bad happened; please try again later.');
}

}
