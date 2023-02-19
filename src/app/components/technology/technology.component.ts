import { AllModel, ArticleModel } from './../../models/SourceModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  news!: AllModel;
  article: ArticleModel[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getCategoriesNews();
  }

  getCategoriesNews() {
    this.newsService.getCategoriesNews('technology').subscribe((data) => {
      this.news = data;
      this.article = this.news.articles;
    });
  }
}
