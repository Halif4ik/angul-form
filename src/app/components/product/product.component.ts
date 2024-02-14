import {Component, Input} from '@angular/core';
import {IProduct, Quiz} from "../../data/interface";

@Component({
  selector: 'app-product',
  /*standalone: true,
  imports: [RouterOutlet],*/
  templateUrl: './product.component.html',
})

export class ProductComponent {
  @Input() product: IProduct;
  @Input() quiz:Quiz;
  protected details = false;
}
