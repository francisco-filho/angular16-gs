import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Shipping } from './shipping';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor(private http: HttpClient) { }

  addToCart(product: Product){
    console.log("add to cart")
    this.items.push(product)
  }

  getItems(): Product[]{
    return this.items
  }

  clearItems(){
    console.log("Clear items")
    this.items = []
  }

  getShippingPrices(): Observable<Shipping[]>{
    return this.http.get<Shipping[]>("/assets/shipping.json")
  }
}
