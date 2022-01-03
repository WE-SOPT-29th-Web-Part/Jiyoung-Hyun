import React from "react";
import {
  IPostArticle,
  arrayHandlerType,
  arrayRemoveType,
} from "../../../types/article.type";
import Tag from "../../Tag";
interface IProps {
  tags: string[];
  articleData: IPostArticle;
  onArrDataChange: arrayHandlerType;
  onArrDataRemove: arrayRemoveType;
}
function WriteTags({
  tags,
  articleData,
  onArrDataChange,
  onArrDataRemove,
}: IProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (e.key === "Enter") {
      onArrDataChange("tags", e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div>
      {tags.map((tag: string, index) => (
        <span key={index} onClick={(e) => onArrDataRemove("tags", tag)}>
          {tag}
        </span>
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
