import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  constructor(private httpClient:HttpClient) { 
    
  }

  public getAllProducts = () => {
    return this.httpClient.get<Product[]>(" http://localhost:9090/products")
    
  }

  
}
