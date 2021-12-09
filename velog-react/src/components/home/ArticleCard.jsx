import React from "react";
import styled from "styled-components";

const ArticleCard = ({ article }) => {
  const { title, summary, tags, thumbnail, date } = article;
  return (
    <StyledRoot>
      <StyledImgWrapper ratio="56%">
        <img src={thumbnail} alt="thumbnail" />
      </StyledImgWrapper>
      <h3>{title}</h3>
      <p>{summary}</p>
      <StyledTags>
        {tags.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTags>
      <div>{date}</div>
    </StyledRoot>
  );
};

export default ArticleCard;

const StyledRoot = styled.article`
  width: 100%;
  color: #495057;
  padding-bottom: 64px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #212529;
  }
  p {
    margin-bottom: 32px;
  }
  & > span {
    color: #868e96;
    font-size: 14px;
  }
`;

const StyledImgWrapper = styled.div`
  padding-top: ${({ ratio }) => ratio};
  position: relative;
  margin-bottom: 16px;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledTags = styled.div`
  margin-bottom: 16px;
`;

const StyledTag = styled.div`
  display: inline-block;
  padding: 0 16px;
  height: 32px;
  line-height: 32px;
  margin: 0 12px 12px 0;
  background-color: #f1f3f5;
  color: #0ca678;
  border-radius: 16px;
  cursor: pointer;
`;
