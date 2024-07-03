import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/Cartsitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
  constructor(private cartServices:CartService) {
    this.cartServices.getCartObservable().subscribe((cart)=>{this.cart=cart;})
   }

  ngOnInit(): void {
  }
  removeFromCart(cartItem:CartItem){
    this.cartServices.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartServices.changeQuantity(cartItem.food.id,quantity)
  }

}
