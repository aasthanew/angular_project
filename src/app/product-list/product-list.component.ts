import { Component } from '@angular/core';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor(
    // private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('The product has been added to cart!');
  }
 // share() {
   // window.alert('The product has been shared!');
  //}
}

