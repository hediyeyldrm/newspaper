import { AllModel, ArticleModel } from './../../models/SourceModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  news!: AllModel;
  article: ArticleModel[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getCategoriesNews();
  }

  getCategoriesNews() {
    this.newsService.getCategoriesNews('entertainment').subscribe((data) => {
      this.news = data;
      this.article = this.news.articles;
    });
  }
}
