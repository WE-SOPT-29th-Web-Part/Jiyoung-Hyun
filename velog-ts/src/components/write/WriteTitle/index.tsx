import React from "react";
import { dataHandlerType } from "../../../types/article.type";
interface IProps {
  title: string;
  onDataChange: dataHandlerType;
}
function WriteTitle({ title, onDataChange }: IProps) {
  return (
    <div>
      <textarea
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => onDataChange("title", e.target.value)}
      />
    </div>
  );
}

export default WriteTitle;
