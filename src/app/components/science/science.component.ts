import { AllModel, ArticleModel } from './../../models/SourceModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  news!: AllModel;
  article: ArticleModel[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getCategoriesNews();
  }

  getCategoriesNews() {
    this.newsService.getCategoriesNews('science').subscribe((data) => {
      this.news = data;
      this.article = this.news.articles;
    });
  }
}
