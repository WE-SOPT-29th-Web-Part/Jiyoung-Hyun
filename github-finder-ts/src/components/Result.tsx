import React from "react";
import { IUserInfo } from "../types/user.type";
import ResultCard from "./ResultCard";
interface IProps {
  userInfo: IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}
function Result({ userInfo, setUserInfo }: IProps) {
  switch (userInfo.status) {
    case "pending":
      return <></>;
    case "resolved":
      return <ResultCard userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case "idle":
      return <></>;
    default:
      return <></>;
  }
}

export default Result;
