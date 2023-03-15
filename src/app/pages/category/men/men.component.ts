import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/productService/product.service";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{

  cartProductsss:Product[]=[];


  amount:number=1;
  cartProducts:any[]=[];

  products:Product[]=[];
  search='';
  constructor(private productService: ProductService,private oneProduct:Product){}
  ngOnInit(): void {
    this.productService.getByCategoryMen()
      .subscribe(
        response=>{
          this.products=response;
        },
        error=>{
          alert('error occurred');
        }
      );
  }

  addToCart(item:Product){
    item.amount=this.amount;
    if("orders" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("orders")!);
      let exist=this.cartProducts.find(itemArr =>itemArr.id==item.id &&itemArr.category_id==item.category_id);
      if(exist){
        alert("this is exist")
        // item.count=item.count+1;
      }else{
        this.cartProducts.push(item);
        localStorage.setItem("orders",JSON.stringify( this.cartProducts))
      }
    }else{
      this.cartProducts.push(item);
      localStorage.setItem("orders",JSON.stringify( this.cartProducts))
    }
    this.amount=1;
    // alert(JSON.stringify(item));
  }

  addInformationToCart(item:Product){
    this.oneProduct.id=item.id;
    this.oneProduct.name=item.name;
    this.oneProduct.price=item.price;
    this.oneProduct.image_url=item.image_url;
    this.oneProduct.category_id=item.category_id;
    this.oneProduct.description=item.description;
    this.oneProduct.amount=1;
  }

  getInformationOfCart():Product{
    return this.oneProduct;
  }
  plus(){
    this.amount++;
  }
  mins(){
    this.amount--;
  }

}
