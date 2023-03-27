import {Component, Input} from '@angular/core';
import {IProduct} from "../../interface/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() product !: IProduct;

  isVisible = false;
}
