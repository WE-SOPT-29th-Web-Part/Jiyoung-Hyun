import Styled from "styled-components";
import { colors } from "../../libs/color";

export const SRoot = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.4rem;
`;

export const SLogo = Styled.header`
  font-weight: bold;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: black;
  }
`;
export const SDetail = Styled.header`
  display: flex;
  align-items: center;

  & > img {
    height: 2rem;
    width: 100%;
    margin-right: 1.2rem;
    cursor: pointer;
  }

  button {
    width: 9.7rem;
    height: 3.2rem;
    line-height: 3.2rem;
    text-align: center;
    border-radius: 1.6rem;
    border: 1px solid ${colors.mainBlack};
    background-color: white;
    margin-right: 2rem;
    transition: background-color 300ms ease;
    cursor: pointer;
    color: ${colors.darkBlack};
    font-size: 1.6rem;
    font-weight: bold;
    &:hover {
      background-color: ${colors.mainBlack};
      color: ${colors.lineGray};
    }
  }
`;
