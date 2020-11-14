import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Shared/Services/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(+'')
  });

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    const product = this.productForm.value;
    this.productService.addProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/products');
        });
  }

}
