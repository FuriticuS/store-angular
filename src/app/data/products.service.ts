import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getList(){
    return this._http.get('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid');
  }
}
