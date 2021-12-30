import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import { colors } from "../../libs/constants/colors";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await client.get("article");
      setArticles(data);
    })();
  }, []);

  return (
    <StyledRoot>
      {articles &&
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
    </StyledRoot>
  );
};

export default ArticlesContainer;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column-reverse;
  & > article + article {
    padding-top: 64px;
    border-top: 1px solid ${colors.lineGray};
  }
`;
