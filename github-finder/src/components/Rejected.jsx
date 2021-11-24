import React from "react";
import Styled from "styled-components";

const Rejected = () => {
  return <SRoot>사용자가 없습니다...</SRoot>;
};

export default Rejected;

const SRoot = Styled.p`
  font-family: 'ZenAntique';
  font-size: 36px;
`;
