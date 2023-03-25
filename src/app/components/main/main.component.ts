import {Component, Input} from '@angular/core';
import {IProduct} from "../../interface/product";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() product !: IProduct;
}
