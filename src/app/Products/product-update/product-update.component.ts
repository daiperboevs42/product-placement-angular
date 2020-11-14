import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../Shared/Services/product.service';
import {Product} from '../../Shared/Models/Product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  product: Product;
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(+'')
  });
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id)
      .subscribe(productFromRest => {
        this.productForm.patchValue({
          name: productFromRest.name,
          price: productFromRest.price
      });
    });
  }
  save(){
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product)
      .subscribe(prodUpdated => {
      this.router.navigateByUrl('/products');
    });
  }
}
