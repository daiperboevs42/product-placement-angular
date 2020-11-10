import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ProductsListComponent} from './Products/products-list/products-list.component';
import {ProductDetailsComponent} from './Products/product-details/product-details.component';

const routes: Routes = [
  {path: 'products/:id', component: ProductDetailsComponent },
  {path: 'products', component: ProductsListComponent },
  {path: '', component: LandingPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
