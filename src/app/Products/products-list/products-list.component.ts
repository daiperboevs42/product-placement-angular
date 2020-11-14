import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Shared/Services/product.service';
import {Product} from '../../Shared/Models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void{
    this.productService.getProducts()
      .subscribe(listOfProducts => {this.products = listOfProducts; });
  }

  delete(id: number): void{
    this.productService.deleteProduct(id).subscribe(message => {
      console.log('Deleted User, Message Received: ' + message);
      this.refresh();
    });
    // this.products = this.productService.getProducts();
  }
}
