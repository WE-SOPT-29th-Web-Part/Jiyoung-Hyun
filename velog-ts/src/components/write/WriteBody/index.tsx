import React from "react";
import { dataHandlerType } from "../../../types/article.type";
interface IProps {
  onDataChange: dataHandlerType;
}
function WriteBody({ onDataChange }: IProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="당신의 이야기를 적어보세요"
        onChange={(e) => onDataChange("body", e.target.value)}
      />
    </div>
  );
}

export default WriteBody;
