import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postImage } from "../../../apis/article.api";
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
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target.files === null) return;
    const imageFile = e.target.files[0];
    formData.append("file", imageFile);
    const imageResponse = await postImage(formData);
    const imageUrl = imageResponse.url;
    onDataChange("thumbnail", imageUrl);
  };
  return (
    <SRoot isPublishClicked={isPublishClicked}>
      <input type="file" onChange={handleImageChange} />
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
