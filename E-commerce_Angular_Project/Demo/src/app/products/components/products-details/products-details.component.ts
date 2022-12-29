import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{

  id:any
  data:any = {}
  @Output() item = new EventEmitter()
  addButton:boolean = false;
  amount:number = 0;

  constructor(private route:ActivatedRoute,private service:ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void{
    this.getProduct();
  }

  getProduct(){
    this.service.getProductById(this.id).subscribe((res:any) => {
        this.data = res;
    }, 
    error => {
      alert(error.message);
    });
  }


  add(){
    this.item.emit({item:this.data, quantity:this.amount});
    this.addButton = false;
  }

}
