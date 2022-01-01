export interface IArticle {
  id: string;
  title: string;
  body: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  date: string;
}

export interface IPostArticle {
  title: string;
  body: string;
  summary: string;
  thumbnail: string;
  tags: string[];
}
