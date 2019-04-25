import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/_model/product';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit() {}

  addProductToCart() {
    console.log(this.product);
    console.log(`Product ${this.product._id} added to cart`);
  }

  viewProduct() {
    console.log(`Product ${this.product._id} viewed`);
  }

  buyProduct() {
    console.log(`Product ${this.product._id} bought`);
  }
}
