import { Injectable } from "@angular/core"
import { Product } from "./product"

@Injectable({
  providedIn: 'root'
})
export class Quantity{
    id : number=0;
    quantity:any
    product:Product=new Product();
}
