import React from "react";
import { IGithubResponse } from "../types/githubResponse.type";
import { IUserInfo } from "../types/user.type";
interface IProps {
  userInfo: IGithubResponse | null;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}
function ResultCard({ userInfo, setUserInfo }: IProps): React.ReactElement {
  const handleClick = () => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      status: "idle",
      data: null,
    }));
  };

  if (!userInfo) return <></>;
  const {
    avatar_url,
    name,
    login,
    html_url,
    followers,
    following,
    public_repos,
  } = userInfo;
  return (
    <>
      {userInfo && (
        <>
          <img src={avatar_url} alt="" /> <p>{name}</p> <p>{login}</p>{" "}
          <a href={html_url}>Visit Github</a>{" "}
          <ul>
            <li>Followers:{followers}</li>
            <li>Following:{following}</li>
            <li>Repos:{public_repos}</li>
          </ul>
          <button onClick={handleClick}>X</button>
        </>
      )}
    </>
  );
}

export default ResultCard;
