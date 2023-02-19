import { ArticleModel } from './../models/SourceModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter',
})
export class NewsFilterPipe implements PipeTransform {
  transform(value: ArticleModel[], newsFilterText: string): ArticleModel[] {
    newsFilterText = newsFilterText ? newsFilterText.toLocaleLowerCase() : '';
    return newsFilterText
      ? value.filter(
          (a: ArticleModel) =>
            a.title.toLocaleLowerCase().indexOf(newsFilterText) !== -1
        )
      : value;
  }
}
