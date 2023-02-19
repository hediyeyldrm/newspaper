import { AllModel, ArticleModel } from './../../models/SourceModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  news!: AllModel;
  article: ArticleModel[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getCategoriesNews();
  }

  getCategoriesNews() {
    this.newsService.getCategoriesNews('general').subscribe((data) => {
      this.news = data;
      this.article = this.news.articles;
    });
  }
}
