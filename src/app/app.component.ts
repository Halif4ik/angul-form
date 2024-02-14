import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {products as data} from "./data/products";
import {IProduct} from "./data/interface";
import { CurrencyPipe } from '@angular/common'; // Import CurrencyPipe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angul-form';

  products: IProduct[] = data

}
