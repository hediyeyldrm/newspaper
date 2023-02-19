import { AllModel, ArticleModel } from './../../models/SourceModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  news!: AllModel;
  article: ArticleModel[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getCategoriesNews();
  }

  getCategoriesNews() {
    this.newsService.getCategoriesNews('sports').subscribe((data) => {
      this.news = data;
      this.article = this.news.articles;
    });
  }
}
