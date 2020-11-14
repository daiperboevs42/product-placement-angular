import { Injectable } from '@angular/core';
import {Product} from '../Models/Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  apiUrl = 'https://localhost:44383/product';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>
    (this.apiUrl);
}
  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }
  getProductById(id: number): Observable<Product>{
  return this.http.get<Product>(this.apiUrl + '/' + id);
  }
  updateProduct(product: Product): Observable<Product> {
  return this.http.put<Product>(this.apiUrl + '/' + product.id, product);
  }
  deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
