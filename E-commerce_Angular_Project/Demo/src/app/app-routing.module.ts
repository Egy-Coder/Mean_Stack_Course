import { NgModule } from '@angular/core';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { PaymentComponent } from './payments/components/payment/payment.component';
import { CheckoutComponent } from './checkouts/components/checkout/checkout.component';

const routes: Routes = [
  {path: "" , component:HomeComponent},
  {path: "products" , component:AllProductsComponent},
  {path: "productdetails/:id" , component:ProductsDetailsComponent},
  {path: "carts" , component:CartComponent},
  {path: "payment" , component:PaymentComponent},
  {path: "checkout" , component:CheckoutComponent},
  {path: "**", redirectTo:"payment" , pathMatch:"full"}
];
0
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
