import React from "react";
import { Link } from "react-router-dom";
import { arrowDropDownIcon, profileImg, searchIcon } from "../../assets";
import { SRoot, SLogo, SDetail } from "./style";

function Header() {
  return (
    <SRoot>
      <SLogo>
        <Link to="/">
          <h1>sopt.log</h1>
        </Link>
      </SLogo>
      <SDetail>
        <img src={searchIcon} alt="search" />
        <Link to="/write">
          <button>내글 작성</button>
        </Link>
        <img src={profileImg} alt="profile" />
        <img src={arrowDropDownIcon} alt="arrow-drop-down" />
      </SDetail>
    </SRoot>
  );
}

export default Header;
