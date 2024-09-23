import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [...products]

  share(){
    console.log('hello, i am sharing...')
  }

  onNotify(){
    window.alert("You have a new deal!")
  }

}
