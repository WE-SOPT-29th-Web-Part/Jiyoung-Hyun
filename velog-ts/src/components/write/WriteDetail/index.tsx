import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPostArticle } from "../../../types/article.type";
import { SRoot } from "./style";

interface IProps {
  articleData: IPostArticle;
  setArticleData: React.Dispatch<React.SetStateAction<IPostArticle>>;
  isPublishClicked: boolean;
  setIsPublishClicked: React.Dispatch<React.SetStateAction<boolean>>;
  submitArticle: () => void;
}
function WriteDetail({
  setArticleData,
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
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleData((articleData) => ({
      ...articleData,
      summary: e.target.value,
    }));
  };
  if (!isPublishClicked && !animate) return null;
  return (
    <SRoot isPublishClicked={isPublishClicked}>
      <textarea
        placeholder="당신의 포스트를 짧게 소개해보세요"
        onChange={handleChange}
      />
      <button onClick={() => setIsPublishClicked(false)}>취소하기</button>
      <Link to="/">
        <button onClick={submitArticle}>출간하기</button>
      </Link>
    </SRoot>
  );
}
export default WriteDetail;
