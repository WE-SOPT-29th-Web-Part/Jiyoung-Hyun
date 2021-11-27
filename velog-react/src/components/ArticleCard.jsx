import React from "react";

const ArticleCard = ({ article }) => {
  const { id, body, title, summary, series, tags, thumbnail, date } = article;
  return (
    <div>
      <img src={thumbnail} alt="thumbnail" />
      <h3>{title}</h3>
      <h4>{summary}</h4>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      <div>{date}</div>
    </div>
  );
};

export default ArticleCard;
