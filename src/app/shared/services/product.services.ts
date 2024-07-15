import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:8080/product';

  constructor(private httpClient: HttpClient) {}

  index(): Observable<any> {
    return this.httpClient
      .get(this.url)
      .pipe(map((element: any) => element?.content));
  }
  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  save(product: Product): Observable<any> {
    return this.httpClient.post(this.url, product);
  }
  update(product: Product): Observable<any> {
    return this.httpClient.put(`${this.url}/${product.id}`, product);
  }
  delete(id?: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
