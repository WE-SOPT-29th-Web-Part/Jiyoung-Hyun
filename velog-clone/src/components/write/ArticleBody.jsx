import React from "react";
import styled from "styled-components";

const ArticleBody = ({ body, handleDataChange }) => {
  return (
    <StyledTextarea
      placeholder="텍스트를 입력하시오"
      value={body}
      onChange={(e) => handleDataChange("body", e.target.value)}
    ></StyledTextarea>
  );
};

export default ArticleBody;

const StyledTextarea = styled.textarea`
  flex: 1;
  width: 50%;
  white-space: pre-wrap;
  padding: 0 48px;
  font-size: 18px;
`;
