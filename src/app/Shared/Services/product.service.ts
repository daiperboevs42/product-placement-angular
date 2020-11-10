import { Injectable } from '@angular/core';
import {Product} from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor() { }
  getProducts(): Product[]{
    return this.products;
}
  addProduct(product: Product){
    this.products.push(product);
  }
  getProductById(id: number){
  return this.products.find(prod => prod.id === id);
  }
}
