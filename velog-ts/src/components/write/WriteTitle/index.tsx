import React from "react";
import { IPostArticle } from "../../../types/article.type";
interface IProps {
  setArticleData: React.Dispatch<React.SetStateAction<IPostArticle>>;
}
function WriteTitle({ setArticleData }: IProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleData((articleData) => ({
      ...articleData,
      title: e.target.value,
    }));
  };
  return (
    <div>
      <textarea placeholder="제목을 입력하세요" onChange={handleChange} />
    </div>
  );
}

export default WriteTitle;
