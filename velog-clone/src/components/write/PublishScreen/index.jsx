import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../../libs/constants/colors";
import PublishWrite from "./PublishWrite";
import PublishSubmit from "./PublishSubmit";

const PublishScreen = ({
  articleData,
  handleDataChange,
  createOrUpdateArticle,
  isPublishScreen,
  setIsPublishScreen,
}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    let timeoutId = null;
    if (isPublishScreen) {
      setAnimate(true);
    } else if (!isPublishScreen && animate) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 125);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isPublishScreen, animate]);
  if (!isPublishScreen && !animate) return null;
  return (
    <StyledRoot isPublishScreen={isPublishScreen}>
      <StyledWrapper>
        <PublishWrite
          handleDataChange={handleDataChange}
          articleData={articleData}
        />
        <StyledCenterLine />
        <PublishSubmit
          createOrUpdateArticle={createOrUpdateArticle}
          setIsPublishScreen={setIsPublishScreen}
        />
      </StyledWrapper>
    </StyledRoot>
  );
};

export default PublishScreen;

const StyledRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.mainWhite};
  transform: translateY(100%);
  animation: slideUp 250ms forwards ease-in;
  ${({ isPublishScreen }) =>
    isPublishScreen
      ? css`
          animation: slideUp 250ms forwards ease-in;
        `
      : css`
          animation: slideDown 125ms forwards ease-out;
        `}
  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const StyledWrapper = styled.div`
  width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`;

const StyledCenterLine = styled.div`
  width: 1px;
  height: 100px;
  margin: 0 32px;
  background-color: ${colors.lightGray};
`;
