import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';
import { User } from '@models/user';
import { Category } from '@models/category';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  constructor() {}

  @Input() product: Product;
  private user: User = Object.assign(new User(), JSON.parse(sessionStorage.getItem('user')));

  ngOnInit() {}

  viewProduct() {
    this.increaseInterest(1);
  }

  addProductToCart() {
    this.increaseInterest(2);
  }

  buyProduct() {
    this.increaseInterest(3);
  }

  increaseInterest(weight: number) {
    this.product.categories.forEach((category: Category) => {
      this.user.increaseInterest(category, weight);
    }, this);
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }
}
