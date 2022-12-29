import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  private readonly base :string = "https://fakestoreapi.com";

  getAllProducts(){
    return this.http.get(this.base + '/products');
  }

  getAllCategories(){
    return this.http.get(this.base +'/products/categories');
  }

  getProductsInSpecificCategory(category:string){
    return this.http.get(this.base +'/products/category/' + category);
  }

  getProductById(id:number){
    return this.http.get(this.base +'/products/' + id);
  }
}
