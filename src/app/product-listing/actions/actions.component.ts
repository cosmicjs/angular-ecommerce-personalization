import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';
import { User } from '@models/user';
import { Category } from '@models/category';
import { UserService } from 'src/app/core/_services/user.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() product: Product;

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
    const user: User = this.userService.getSessionUser();
    this.product.categories.forEach((category: Category) => {
      user.increaseInterest(category, weight);
    }, this);

    this.userService.setSessionUser(user);
  }
}
