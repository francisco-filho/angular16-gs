import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined

  constructor(
    private route : ActivatedRoute,
    private cart: CartService,
  ){
  }

  ngOnInit(): void{
    let id = this.route.snapshot.paramMap.get('productId')
    this.product = products.find(p => p.id === Number(id))
  }

  addToCart(product: Product){
    console.log("Adding product to the cart")
    this.cart.addToCart(product)
  }
}
