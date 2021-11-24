import React from "react";
import Styled from "styled-components";

const Card = ({ userInfo, setUserInfo }) => {
  return (
    <CardContainer>
      <Profile>
        <img src={userInfo.avatar_url} alt="" />
        <p>{userInfo.name}</p>
        <p>{userInfo.login}</p>
        <a href={userInfo.url}>Visit Github</a>
      </Profile>
      <Info>
        <ul>
          <li>Followers:{userInfo.followers}</li>
          <li>Following:{userInfo.following}</li>
          <li>Repos:{userInfo.public_repos}</li>
        </ul>
      </Info>
      <Button onClick={() => setUserInfo({})}>X</Button>
    </CardContainer>
  );
};

const CardContainer = Styled.div`
  display: flex;
  font-family: 'ZenAntique';
  border: 1px solid #304b1b;
  padding: 10px;
`;

const Profile = Styled.div`
  margin-right: 30px;
  & > img {
    width: 100px;
    height: 100px;
  }
  & > p:nth-of-type(1) {
    font-size: 26px;
    font-weight: bold;
    margin: 5px;
  }
  & > p:nth-of-type(2) {
    font-size: 16px;
  }
  & > a {
    text-decoration: none;
    color: #304b1b;
  }
`;

const Info = Styled.div`
  margin-right: 30px;
  & > ul {
    margin-top: 155px;
  }
`;

const Button = Styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

export default Card;
