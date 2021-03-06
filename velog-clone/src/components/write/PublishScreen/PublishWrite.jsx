import React, { useState } from "react";
import styled from "styled-components";
import { imageClient } from "../../../libs/api";
import { colors } from "../../../libs/constants/colors";
import ImgWrapper from "../../common/ImgWrapper";

const PublishWrite = ({ articleData, handleDataChange }) => {
  const MAX_NUM = 150;
  const { summary, thumbnail } = articleData;
  const [preViewImage, setPreViewImage] = useState(thumbnail);

  const handleChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    if (length > MAX_NUM) {
      const room = MAX_NUM - summary.length;
      const roomSummary = value.slice(summary.length, summary.length + room);
      const fullSummary = summary + roomSummary;
      handleDataChange("summary", fullSummary);
      return;
    }
    handleDataChange("summary", value);
  };

  const handleImageChange = async (e) => {
    const formData = new FormData();
    const imageFile = e.target.files[0];
    formData.append("file", imageFile);
    const imageResponse = await imageClient.post("", formData);
    const imageUrl = imageResponse.data.url;
    setPreViewImage(imageUrl);
    handleDataChange("thumbnail", imageUrl);
  };

  return (
    <StyledRoot>
      <h3>포스트 미리보기</h3>
      <input type="file" onChange={handleImageChange} />
      {preViewImage && (
        <ImgWrapper ratio="56%">
          <img src={preViewImage} alt="thumbnail" />
        </ImgWrapper>
      )}
      <textarea
        placeholder="당신의 포스트를 짧게 소개해보세요."
        value={summary}
        onChange={handleChange}
      />
      <StyledCharacterCounter limit={summary.length === 150}>
        {summary.length || "0"}/150
      </StyledCharacterCounter>
    </StyledRoot>
  );
};

export default PublishWrite;

const StyledRoot = styled.div`
  width: 100%;
  & > h3 {
    margin-bottom: 8px;
    font-size: 21px;
    font-weight: bold;
  }
  & > input {
    margin-bottom: 32px;
    display: block;
  }
  & > textarea {
    width: 100%;
    height: 118px;
    resize: none;
    padding: 12px 16px;
  }
`;

const StyledCharacterCounter = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 4px;
  color: ${({ limit }) => (limit ? "red" : colors.dateGray)};
`;
