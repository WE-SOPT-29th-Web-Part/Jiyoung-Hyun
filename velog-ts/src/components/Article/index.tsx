import React from "react";
import { Link } from "react-router-dom";
import { IArticle } from "../../types/article.type";
import Tag from "../Tag";
import { SRoot } from "./style";
interface IProps {
  article: IArticle;
}
function Article({ article }: IProps) {
  const { id, title, summary, thumbnail, tags, date } = article;
  return (
    <SRoot>
      <Link to={`article/${id}`} state={article}>
        {thumbnail && <img src={thumbnail} alt="thumbnail" />}
        <div>{title}</div>
      </Link>

      <div>{summary}</div>
      <div>
        {tags.map((tag: string, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div>{date}</div>
    </SRoot>
  );
}

export default Article;
