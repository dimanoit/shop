import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productModel: ProductModel;

  constructor() { }

  ngOnInit() {
    console.log(this.productModel.name + ' ' + this.productModel.name.length);
  }

  onBuy() {
    console.log(`You bought ${this.productModel.name}`);
  }

  truncateString(): string {
    let tempName = this.productModel.name;
    return tempName.length > 10 ? tempName.slice(0, 60) : tempName;
  }
}
