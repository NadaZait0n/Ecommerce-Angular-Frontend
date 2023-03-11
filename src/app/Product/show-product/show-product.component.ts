import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../models/product';
import { ProductService } from '../../services/productService/product.service';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit{
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

add(){
    let product=new Product();
    this.productService.post(product)
      .subscribe(
        response =>{
          this.products.push(product)
          alert("added ")
        },
        error=>{
          alert('error occurred');
        }
      );
}


// update(){
//   let product=new Product();
//   this.productService.put(product)
//     .subscribe(
//       response =>{
//         this.products.push(product)
//         alert("updated")
//       },
//       error=>{
//         alert('error occurred');
//       }
//     );
// }

delete(index:number){
  let product=this.products[index];
  this.productService.deleteById(product.id)
    .subscribe(
      response=>{
        alert("Are you sure you want to delete this product ?")
        this.products.splice(index,1);
      }
    );
}
  update(item:any){
    this.form.get('name')?.setValue(item.name)
    this.form.get('price')?.setValue(item.price)
    this.form.get('description')?.setValue(item.description)
    this.form.get('category_id')?.setValue(item.category_id)
    this.form.get('image_url')?.setValue(item.image_url)
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




