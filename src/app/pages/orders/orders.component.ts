import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  {

  amount:number=1;
  total:number=0;
  name:string="";
  address:string="";
  phone:string="";

  deleteOneProducr:any;
  order:Order=new Order();

  quantities:Quantity[]=[];

  ngOnInit(): void {
    this.getCardProducts();
    this.totalAmount();

  }
  getCardProducts(){
    if("quantites" in localStorage){
      this.quantities=JSON.parse(localStorage.getItem("quantites")!);
    }
    // console.log(this.cartProductsss.length);
    // let result = this.cartProducts.map(a => a.id);

  }

  onSelected(value:number):void{
    this.amount=value;
    this.totalAmount();
  }

  removeOrder(id:number):void{
    if("quantites" in localStorage){
      this.quantities=JSON.parse(localStorage.getItem("quantites")!);
      this.quantities.forEach((value,index)=>{
        if(value.product.id==id){
          this.total-=value.product.price;
          this.quantities.splice(index,1);

        }
    });
      localStorage.setItem("quantites",JSON.stringify( this.quantities))
    }
    this.getCardProducts();
  }


  totalAmount():void{
    this.quantities.forEach((value)=>{
      this.total+=value.product.price*value.quantity;
  });
  }
  addName(name:string):void{
    this.name=name;
  }
  addAddress(address:string):void{
    this.address=address;
  }
  addPhone(phone:string):void{
    this.phone=phone;
  }

  submit():void{
    this.order.quantities=JSON.parse(localStorage.getItem("quantites")!);
    this.order.address=this.address;
    this.order.name=this.name;
    this.order.phone=this.phone;
    this.order.quantity=this.order.quantities.length;
    this.order.total=this.total;
  }


}



// this.cartProductsss=JSON.parse(localStorage.getItem("orders")!);
