import {Component, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import {FormGroup} from "@angular/forms";
import {ProductService} from "../../services/productService/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  products:Product[]=[];
  base64:any='';
  form!:FormGroup;
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.get()
      .subscribe(
        response=>{
          this.products=response;
          // this._router.navigateByUrl('/product');
        },
        error=>{
          alert('error occurred');
        }
      );
    //alert("3");
  }

  getProductById(index:number){
    let product=this.products[index]
    this.productService.getByID(index)
      .subscribe(
        response =>{
          this.products=response;
        },
        error=>{
          alert('error occurred');
        }
      );
  }
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL (file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image_url')?.setValue(this.base64)
      console.log(this.base64)
    };
  }
}
