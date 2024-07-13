import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(username: string, pass: string): Observable<any> {
    return of('deu bom');
  }
}
