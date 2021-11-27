import React, { useState, useEffect } from "react";
import { client } from "../../libs/api";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [articleData, setArticleData] = useState([]);
  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticleData(data);
    console.log(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);
  return (
    <div>
      {articleData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesContainer;
