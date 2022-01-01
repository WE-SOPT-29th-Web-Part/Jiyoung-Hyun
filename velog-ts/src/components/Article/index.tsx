import React from "react";
import Tag from "../Tag";
import { SRoot } from "./style";
interface IProps {
  title: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  date: string;
}
function Article({ title, summary, thumbnail, tags, date }: IProps) {
  return (
    <SRoot>
      {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      <div>{title}</div>
      <div>{summary}</div>
      <div>
        {tags.map((tag: string, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div>{date}</div>
    </SRoot>
  );
}

export default Article;
