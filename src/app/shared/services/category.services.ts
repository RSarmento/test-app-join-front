import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  index(): Observable<any> {
    return of('index');
  }
  get(): Observable<any> {
    return of('index');
  }
  save(): Observable<any> {
    return of('index');
  }
  update(): Observable<any> {
    return of('index');
  }
  delete(): Observable<any> {
    return of('index');
  }
}
