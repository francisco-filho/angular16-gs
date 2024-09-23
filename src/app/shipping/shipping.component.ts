import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  shippingCosts = this.cart.getShippingPrices()

  constructor(private cart: CartService){

  }

}
