import React from "react";
import Styled from "styled-components";

const Card = ({ userInfo, setUserInfo }) => {
  return userInfo.avatar_url ? (
    <CardContainer>
      <div>
        <img src={userInfo.avatar_url} alt="" />
        <p>{userInfo.name}</p>
        <p>{userInfo.login}</p>
        <a href={userInfo.url}>Visit Github</a>
      </div>
      <div>
        <ul>
          <li>Followers:{userInfo.followers}</li>
          <li>Following:{userInfo.following}</li>
          <li>Repos:{userInfo.public_repos}</li>
        </ul>
      </div>
      <Button onClick={() => setUserInfo({})}>X</Button>
    </CardContainer>
  ) : (
    <></>
  );
};

const CardContainer = Styled.div`
  display: flex;
  img {
    width: 100px;
    height: 100px;
  }
  p:nth-of-type(1) {
    font-size: 26px;
  }
  p:nth-of-type(2) {
    font-size: 16px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #304b1b;
  }
  div {
    margin-right: 30px;
  }
`;

const Button = Styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

export default Card;
