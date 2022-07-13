import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class HttpService {


  constructor(private httpClient: HttpClient) {
  }

  //TODO : Should be handling error code based on status code and all.
  get(url: string, params?: any, httpOptions?: any): Observable<any> {
    const data = {params, headers: httpOptions}
    return this.httpClient.get(url, data)
    // .pipe(catchError(this.errorResponseHandler.bind))
  }

  //TODO : Should be handling error code based on status code and all.
  post(url: string, params?: any, headers?: any): Observable<any> {
    return this.httpClient.post(url, params, headers)
    // .pipe(catchError(this.errorResponseHandler.bind))
  }

  put(url: string, params?: any[], headers?: any) {
    return this.httpClient.put(url, params, headers)
  }

  delete(url: string, params?: number) {
    return this.httpClient.delete(url + params)
  }

  //Wrote method for error handling to be used in future IA
  private errorResponseHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (response.status == 401) {
      console.log("Authentication Failure")
    }
    if (key === 'isTrusted') {
      message = key + ':' + message;
      //No Internet
    }
    return throwError(() => new Error(message))
  }
}
