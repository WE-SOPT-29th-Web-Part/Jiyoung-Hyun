import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import profileImg from "../../assets/sopt_web.png";
import { ReactComponent as ArrowDropDownImage } from "../../assets/arrow_drop_down.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <StyledLeft onClick={() => navigate("/")}>
        <div></div>
        <span>sopt.log</span>
      </StyledLeft>
      <StyledRight>
        <SearchIcon />
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
        <StyledThumbnail>
          <img src={profileImg} alt="profile" />
          <ArrowDropDownImage fill="darkgray" />
        </StyledThumbnail>
      </StyledRight>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  height: 64px;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    height: 20px;
    width: 100%;
    margin-right: 12px;
    cursor: pointer;
  }
  button {
    width: 97px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid black;
    background-color: white;
    margin-right: 20px;
    transition: background-color 300ms ease;
    cursor: pointer;
    color: #212529;
    font-size: 16px;
    font-weight: bold;
    &:hover {
      background-color: black;
      color: #e9ecef;
    }
  }
`;

const StyledLeft = styled.div`
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledThumbnail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  img {
    margin-right: 4px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &:hover svg {
    fill: black;
  }
`;
