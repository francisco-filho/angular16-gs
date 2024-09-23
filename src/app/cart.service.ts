import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor() { }

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
}
