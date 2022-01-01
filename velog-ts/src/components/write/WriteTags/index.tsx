import React from "react";
import { IPostArticle } from "../../../types/article.type";
import Tag from "../../Tag";
interface IProps {
  tags: string[];
  articleData: IPostArticle;
  setArticleData: React.Dispatch<React.SetStateAction<IPostArticle>>;
}
function WriteTags({ tags, articleData, setArticleData }: IProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (e.key === "Enter") {
      const tempData = { ...articleData };
      tempData.tags = [...tempData.tags, e.target.value];
      setArticleData(tempData);
      e.target.value = "";
    }
  };
  return (
    <div>
      {tags.map((tag: string, index) => (
        <Tag key={index} tag={tag} />
      ))}
      <input
        type="text"
        placeholder="태그을 입력하세요"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default WriteTags;
