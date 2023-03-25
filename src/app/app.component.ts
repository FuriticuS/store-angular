import {Component, OnInit} from '@angular/core';
import {IProduct} from "./interface/product";
import {ProductsService} from "./data/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products: IProduct[] = []

  constructor(private _productsService: ProductsService) {
  }

  ngOnInit(): void {
    this._productsService.getList().subscribe(response =>{
      console.log(response)
    });
  }
}
