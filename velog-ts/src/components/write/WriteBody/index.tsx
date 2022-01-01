import React from "react";
import { IPostArticle } from "../../../types/article.type";
interface IProps {
  setArticleData: React.Dispatch<React.SetStateAction<IPostArticle>>;
}
function WriteBody({ setArticleData }: IProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value,
    }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="당신의 이야기를 적어보세요"
        onChange={handleChange}
      />
    </div>
  );
}

export default WriteBody;
