import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteArticle } from "../../apis/article.api";
interface IProps {
  articleId: string;
}
function ArticleOptions({ articleId }: IProps) {
  const navigate = useNavigate();
  const handleArticleDelete = async () => {
    await deleteArticle(articleId);
    navigate("/");
  };
  return (
    <>
      <button>통계</button>
      <button>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </>
  );
}

export default ArticleOptions;
