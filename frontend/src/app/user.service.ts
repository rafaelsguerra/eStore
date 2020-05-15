import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from './auth/user.model';
import { Product } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new User('Rafael', 'test@test.com', '123456', {items : []});
  cartItemsChanged = new Subject<[]>();

  constructor() { }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getCartItems() {
    return this.user.cart.items.slice();
  }

  addToCart(product: Product) {
    const itemIndex = this.user.cart.items.findIndex(item => {
      return item.product._id === product._id;
    });
    
    let newQuantity = 1;
    const updatedCartItems = [...this.user.cart.items];

    if (itemIndex >= 0) { //product is already in cart
      newQuantity = this.user.cart.items[itemIndex].quantity + 1;
      updatedCartItems[itemIndex].quantity = newQuantity;
    } else { //product is not in cart
      updatedCartItems.push({product: product, quantity: 1})
    }

    const updatedCart = { items: updatedCartItems };
    this.user.cart = updatedCart;

    this.cartItemsChanged.next(this.user.cart.items);
  }

  removeFromCart(productId: string) {
    const updatedCartItems = this.user.cart.items.filter(item => {
      return item.product._id !== productId;
    });

    this.user.cart.items = updatedCartItems;
    this.cartItemsChanged.next(this.user.cart.items);
  }

  clearCart() {
    this.user.cart.items = [];
    this.cartItemsChanged.next(this.user.cart.items);
  }
}
