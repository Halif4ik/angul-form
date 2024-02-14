import {Component, OnInit} from '@angular/core';
import { Quiz} from "./data/interface";
import {ProductsService} from "./components/product/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Test passwords';
  quizs: Quiz [] = []
  loading=false
  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe((getQuiz) => {
      this.quizs = getQuiz.detail.quiz;
      console.log('this.quiz-',this.quizs);
      this.loading = false;
    });

  }

}
