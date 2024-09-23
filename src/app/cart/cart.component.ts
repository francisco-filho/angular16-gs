import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Shipping } from '../shipping';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cart.getItems()

  constructor(private cart: CartService, private http: HttpClient){}

  getShippingPrices(): Observable<Shipping[]>{
    return this.http.get<Shipping[]>("/assets/shipping.json")
  }
}
