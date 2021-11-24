import React from "react";
import Pending from "./Pending";
import Rejected from "./Rejected";
import Card from "./Card";

const NewCard = ({ userInfo, setUserInfo }) => {
  switch (userInfo.status) {
    case "pending":
      return <Pending />;
    case "resolved":
      return <Card userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case "rejected":
      return <Rejected />;
    case "idle":
      return <></>;
    default:
      return <></>;
  }
};

export default NewCard;
