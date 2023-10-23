import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError,throwError } from 'rxjs';

const BASE_URl =['http://localhost:3000/']
@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'http://localhost:3000/api/enroll';

  constructor(private _http: HttpClient) {}

  enroll(user: User) {
    return this._http.post<any>(this._url,user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
