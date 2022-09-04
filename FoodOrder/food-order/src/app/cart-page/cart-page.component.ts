import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart !: Cart;

  constructor(private cs: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cs.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cs.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cs.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
