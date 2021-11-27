import React, { useState } from "react";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleTags from "../components/write/ArticleTags";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import { client } from "../libs/api";
const Write = () => {
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "",
    date: "",
  });
  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const now = new Date();
    const date = ` ${now.getFullYear()}년${
      now.getMonth() + 1
    }월 ${now.getDate()}일 `;
    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약입니다.",
    });
  };
  const handlePost = async () => {
    await createArticle();
  };
  return (
    <div>
      <button onClick={handlePost}>POST!</button>
      <ArticleTitle setArticleData={setArticleData}></ArticleTitle>
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      ></ArticleTags>
      <ArticleBody setArticleData={setArticleData}></ArticleBody>
      <ArticleFooter></ArticleFooter>
    </div>
  );
};

export default Write;
