import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  viewproduct :any

  constructor(private route: ActivatedRoute, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['productview']) {
        this.viewproduct = JSON.parse(params['productview']);
        console.log('view product received:', this.viewproduct);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart();
  }

}
