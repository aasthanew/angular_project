import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { CartService } from '../cart.service';
//import { Product, products } from '../products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class testcomp implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  onClick() {
    alert('Are you sure you want to buy it');
  }
}
//this.product = products.find(product => product.id === productIdFromRoute);
