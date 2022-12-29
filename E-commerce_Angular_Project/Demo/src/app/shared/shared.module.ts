import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from '../products/components/products-details/products-details.component';


@NgModule({
  declarations: [
    FooterComponent,
    SelectComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    SelectComponent,
    ProductComponent,
    FormsModule
  ]
})
export class SharedModule { }
