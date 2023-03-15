import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class Order{
    id : any
    quantities:any
    total:any
    quantity:number=0;
    user:any
    name:any
    address:any
    phone:any
}
