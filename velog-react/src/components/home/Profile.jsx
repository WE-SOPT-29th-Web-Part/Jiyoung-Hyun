import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/sopt_web.png";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";

const Profile = () => {
  return (
    <StyledRoot>
      <StyledProfile>
        <img src={profileImg} alt="profile" />
        <div>
          <p>현지영</p>
          <p>안녕하세요.</p>
        </div>
      </StyledProfile>
      <StyledCenterLine></StyledCenterLine>
      <StyledContact>
        <a href="https://github.com/shji023" target="blank">
          <GithubIcon fill="lightGray" />
        </a>
        <a href="/" target="blank">
          <HomeIcon fill="lightGray" />
        </a>
        <a href="/">
          <MailIcon fill="lightGray" />
        </a>
      </StyledContact>
    </StyledRoot>
  );
};

export default Profile;

const StyledRoot = styled.section`
  margin: auto;
  margin-top: 90px;
  width: 100%;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-right: 16px;
  }
  div {
    p:nth-of-type(1) {
      margin: 0;
      margin-bottom: 10px;
      font-size: 24px;
    }
    p:nth-of-type(2) {
      font-weight: normal;
      margin: 0;
      font-size: 18px;
      color: #495057;
    }
  }
`;

const StyledCenterLine = styled.div`
  background-color: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

const StyledContact = styled.div`
  & > a > svg {
    margin-right: 16px;
    &:hover {
      fill: #212529;
    }
  }
`;
