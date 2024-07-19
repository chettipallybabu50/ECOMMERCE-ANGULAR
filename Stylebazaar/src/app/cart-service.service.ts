import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();


  constructor() { }
  addToCart() {
    let currentCount = this.cartCount.value;
    this.cartCount.next(currentCount + 1);
  }

}
