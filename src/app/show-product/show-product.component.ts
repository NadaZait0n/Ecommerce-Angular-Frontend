import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';
import { ProductService } from '../services/productService/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit{
  products:Product[]=[];
  displayedColumns:string[]=['id','name','price','description','category_id','image_url']
  constructor(private _http:HttpClient){}
  ngOnInit(): void {
    this._http.get<Product[]>(" http://localhost:9090/products")
  .subscribe(
    response=>{
      //alert("2");
      this.products=response;
    },
    error=>{
      alert('error occurred');
    }
  );
  //alert("3");
}

  }

//   public getAll():Observable<Product[]>{
// return this.productService.getAllProducts.subscribe=>(

//   (resp:Product[])=>{
//     console.log(resp);
//     this.products=resp;
//   }
// )
//   }


