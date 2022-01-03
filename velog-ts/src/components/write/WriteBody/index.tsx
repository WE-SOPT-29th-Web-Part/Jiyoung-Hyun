import React from "react";
import { dataHandlerType } from "../../../types/article.type";
interface IProps {
  body: string;
  onDataChange: dataHandlerType;
}
function WriteBody({ body, onDataChange }: IProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="당신의 이야기를 적어보세요"
        value={body}
        onChange={(e) => onDataChange("body", e.target.value)}
      />
    </div>
  );
}

export default WriteBody;
