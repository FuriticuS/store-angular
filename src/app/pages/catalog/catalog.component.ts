import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../interface/product";
import {ProductsService} from "../../data/products.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  products: IProduct[] = [];

  constructor(private _productsService: ProductsService) {
  }

  ngOnInit(): void {
    this._productsService.getList().subscribe(response =>{
      this.products = response.data
    });
  }
}
