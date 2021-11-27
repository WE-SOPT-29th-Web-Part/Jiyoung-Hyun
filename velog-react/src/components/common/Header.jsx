import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <SLeft>sopt.log</SLeft>
      <SRight>
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
      </SRight>
    </div>
  );
};

export default Header;

const SLeft = styled.div``;

const SRight = styled.div``;
