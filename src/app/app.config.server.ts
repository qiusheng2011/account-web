import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    alert(error.error.detail);

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  login(body: any) {
    let response = null;
    let formData = new URLSearchParams();
    formData.set('username', body.username);
    formData.set('password', body.password);
    response = this.http
      .post(
        'http://192.168.196.86:8700/account/v2/authorization',
        formData.toString(),
        {
          responseType: 'json',
          observe: 'response',
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          }),
        }
      )
      .pipe(catchError(this.handleError));

    return response;
  }
}
