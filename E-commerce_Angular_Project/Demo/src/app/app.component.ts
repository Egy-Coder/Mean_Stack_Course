import { Component, Output } from '@angular/core';
import { AllProductsComponent } from './products/components/all-products/all-products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AllProductsComponent {
  
  title = 'E-commerce';

  cartCount:any = localStorage.getItem("cartCount");
  


}
