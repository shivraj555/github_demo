import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://api.github.com';
  constructor(private http: HttpClient) {}

  getUser(userName: string): Observable<HttpResponse<any>> {
    return this.http
      .get<any>(this.baseUrl + `/users/${userName}`, {
        observe: 'response',
      })
      .pipe(retry(3));
  }
}
