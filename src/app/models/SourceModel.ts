export interface SourceModel {
  id: null;
  name: string;
}

export interface ArticleModel {
  source: SourceModel;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface AllModel {
  status: string;
  totalResults: number;
  articles: ArticleModel[];
}
