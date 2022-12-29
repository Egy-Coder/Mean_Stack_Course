import { Component, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products:any[] = []
  categories:any[] = []
  carProducts:any[] = []
  count:number = 0;
  
  constructor(private service:ProductsService) {}

  ngOnInit(): void{
    this.getProducts();
    this.getCategories();
  }



  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
        this.products = res;
    }, 
    error => {
      alert(error.message);
    });
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any) => {
        this.categories = res;
      }, 
      error => {
        alert(error.message);
      })
  }


  filterCategor(event:any){
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsCategory(value);  
  }


  getProductsCategory(category:string){
    this.service.getProductsInSpecificCategory(category).subscribe((res:any)=>{
      this.products = res;
    });
  }

 
  addToCart(event:any){

    if('cart' in localStorage){

      this.carProducts = JSON.parse(localStorage.getItem('cart')!);

      let exist = this.carProducts.find(item => item.item.id == event.item.id)

      if(exist){
        alert('product is already in your cart')
      }else{
        this.carProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.carProducts));
      }

    }else{

      this.carProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.carProducts));
    }

    localStorage.setItem("cartCount" ,JSON.stringify(++this.count))

    alert('done added to cart');
  }


}
