import { Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IProduct} from "../../data/interface";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product.component.html',
})

export class ProductComponent {
  @Input() product: IProduct;
}
