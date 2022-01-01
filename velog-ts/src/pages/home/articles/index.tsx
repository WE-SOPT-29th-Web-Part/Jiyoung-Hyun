import React, { useEffect, useState } from "react";
import { getArticleList } from "../../../apis/article.api";
import Article from "../../../components/Article";
import { IArticle } from "../../../types/article.type";

function Articles() {
  const [articleList, setAritcleList] = useState<IArticle[] | null>(null);

  const fetchArticleList = async () => {
    const data = await getArticleList();
    data && setAritcleList(data);
  };
  useEffect(() => {
    fetchArticleList();
  }, []);
  return (
    <div>
      {articleList &&
        articleList.map((article: IArticle) => (
          <Article key={article.id} article={article} />
        ))}
    </div>
  );
}

export default Articles;
