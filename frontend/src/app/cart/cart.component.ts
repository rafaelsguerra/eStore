import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Product } from '../product-list/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  private cartChanged: Subscription;
  totalPrice: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.cartItems = this.userService.getCartItems();    
    this.cartChanged = this.userService.cartItemsChanged.subscribe(items => {
      this.cartItems = items;
    })
    this.totalPrice = this.getTotalPrice();
  }

  onClickRemove(productId: string) {
    this.userService.removeFromCart(productId)
  }

  getTotalPrice() {
    let totalPrice = 0;
    for(let item of this.cartItems) {
      totalPrice = totalPrice + item.product.price * item.quantity;
    }
    return totalPrice;
  }

}
