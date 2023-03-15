import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class Order{
    id : any
    quantities:any
    total:any
    user:any
    quantity:number=0;
    name:any
    address:any
    phone:any
}
