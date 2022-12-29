import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartProducts: any[] = [];

  constructor() {}

  ngOnInit(){

    this.getCartProducts();
  }

  getCartProducts(){

    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }

  }


  alertExpire(){
    alert("sorry , code expired ! ");

   var input = document.getElementById('discountcode') as HTMLInputElement | null;

    if (input != null) {
      input.value = '';
    }
  }

 
}
