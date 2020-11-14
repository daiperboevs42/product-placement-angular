import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent} from './Products/products-list/products-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ProductAddComponent } from './Products/product-add/product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from './Products/product-update/product-update.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavbarComponent,
    LandingPageComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
