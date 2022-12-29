import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { PaymentComponent } from './payments/components/payment/payment.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
