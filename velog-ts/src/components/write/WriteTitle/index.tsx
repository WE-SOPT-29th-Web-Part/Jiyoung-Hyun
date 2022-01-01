import React from "react";
import { dataHandlerType } from "../../../types/article.type";
interface IProps {
  onDataChange: dataHandlerType;
}
function WriteTitle({ onDataChange }: IProps) {
  return (
    <div>
      <textarea
        placeholder="제목을 입력하세요"
        onChange={(e) => onDataChange("title", e.target.value)}
      />
    </div>
  );
}

export default WriteTitle;
