import { ArticleModel, AllModel } from './../models/SourceModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&apiKey=9a5abddeb51249bc9ceb81bac242df0b';

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<AllModel> {
    return this.httpClient.get<AllModel>(this.apiUrl);
  }

  getCategoriesNews(categoryName: string): Observable<AllModel> {
    return this.httpClient.get<AllModel>(
      `https://newsapi.org/v2/top-headlines?country=tr&category=${categoryName}&apiKey=9a5abddeb51249bc9ceb81bac242df0b`
    );
  }
}
