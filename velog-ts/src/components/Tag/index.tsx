import React from "react";
interface IProps {
  tag: string;
}
function Tag({ tag }: IProps) {
  return <span>{tag}</span>;
}

export default Tag;
