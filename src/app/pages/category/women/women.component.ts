import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/productService/product.service";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit{
  products:Product[]=[];

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getByCategoryWomen()
      .subscribe(
        response=>{
          this.products=response;
        },
        error=>{
          alert('error occurred');
        }
      );
  }

}
