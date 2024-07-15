import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Category } from '../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'http://localhost:8080/category';

  constructor(private httpClient: HttpClient) {}

  index(): Observable<any> {
    return this.httpClient
      .get(this.url)
      .pipe(map((element: any) => element?.content));
  }
  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  save(): Observable<any> {
    return of('index');
  }
  update(category: Category): Observable<any> {
    return this.httpClient.put(`${this.url}/${category.id}`, category);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
