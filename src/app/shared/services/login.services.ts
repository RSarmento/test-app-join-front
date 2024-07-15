import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient) {}

  login(username: string, pass: string): Observable<any> {
    const loginObj = {
      username: username,
      password: pass,
    };
    //return this.httpClient.post(this.url, loginObj);
    return of('');
  }
}
