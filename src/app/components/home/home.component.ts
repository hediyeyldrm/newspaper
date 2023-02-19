import { NewsService } from './../../services/news.service';
import { ArticleModel, AllModel } from './../../models/SourceModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news!: AllModel;
  article: ArticleModel[] = [];
  sliderData: ArticleModel[] = [];
  newsFilterText: string = '';
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe((data) => {
      this.news = data;
      this.sliderData = this.news.articles.splice(0, 3);
      this.article = this.news.articles;
    });
  }
}
