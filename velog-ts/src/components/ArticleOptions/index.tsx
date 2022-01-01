import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteArticle } from "../../apis/article.api";
import { IArticle } from "../../types/article.type";
interface IProps {
  articleId: string;
  article: IArticle;
}
function ArticleOptions({ articleId, article }: IProps) {
  const navigate = useNavigate();
  const handleArticleDelete = async () => {
    await deleteArticle(articleId);
    navigate("/");
  };
  const handleNavigateEditPage = () => {
    navigate(`/article/edit/${articleId}`, { state: article });
  };
  return (
    <>
      <button>통계</button>
      <button onClick={handleNavigateEditPage}>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </>
  );
}

export default ArticleOptions;
