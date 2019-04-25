import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [ProductListingComponent, ActionsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductListingModule { }
