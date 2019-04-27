import { Component, OnInit } from '@angular/core';
import { CosmicService } from 'src/app/core/_services/cosmic.service';
import { Product } from '@models/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  public productList: Product[];

  constructor(private cosmicService: CosmicService) {}

  ngOnInit() {
    this.cosmicService.getProducts().subscribe(products => (this.productList = products));
  }
}
