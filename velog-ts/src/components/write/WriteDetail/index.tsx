import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataHandlerType } from "../../../types/article.type";
import { SRoot } from "./style";

interface IProps {
  onDataChange: dataHandlerType;
  isPublishClicked: boolean;
  setIsPublishClicked: React.Dispatch<React.SetStateAction<boolean>>;
  submitArticle: () => void;
}
function WriteDetail({
  onDataChange,
  isPublishClicked,
  setIsPublishClicked,
  submitArticle,
}: IProps) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isPublishClicked) {
      setAnimate(true);
    } else if (!isPublishClicked && animate) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 125);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isPublishClicked, animate]);
  if (!isPublishClicked && !animate) return null;
  return (
    <SRoot isPublishClicked={isPublishClicked}>
      <textarea
        placeholder="당신의 포스트를 짧게 소개해보세요"
        onChange={(e) => onDataChange("summary", e.target.value)}
      />
      <button onClick={() => setIsPublishClicked(false)}>취소하기</button>
      <Link to="/">
        <button onClick={submitArticle}>출간하기</button>
      </Link>
    </SRoot>
  );
}
export default WriteDetail;
