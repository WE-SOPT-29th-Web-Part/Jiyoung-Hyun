import React from "react";
import { useLocation } from "react-router-dom";
import Tag from "../../components/Tag";
import Header from "../../components/Header";
import ArticleOptions from "../../components/ArticleOptions";
import { ImgWrapper } from "./style";
function Article() {
  const location = useLocation();

  const article = location.state;
  const { id, title, body, thumbnail, tags, date } = article;
  return (
    <>
      <Header />
      <div>{title}</div>
      <ArticleOptions articleId={id} article={article}></ArticleOptions>
      <div>
        {tags.map((tag: string, index: number) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div>{date}</div>
      <ImgWrapper>
        {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      </ImgWrapper>

      <div>{body}</div>
    </>
  );
}

export default Article;
