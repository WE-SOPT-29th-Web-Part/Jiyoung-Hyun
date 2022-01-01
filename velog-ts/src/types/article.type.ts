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

export type dataHandlerType = (
  key: "title" | "body" | "summary" | "thumbnail",
  value: string
) => void;

export type arrayHandlerType = (key: "tags", value: string) => void;

export type arrayRemoveType = (key: "tags", innerText: string) => void;
