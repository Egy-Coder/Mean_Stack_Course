import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
