import React, { useState } from "react";
import { IUserInfo } from "../types/user.type";
import { client } from "../libs/api";
interface IProps {
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}
function SearchBar({ setUserInfo }: IProps): React.ReactElement {
  const [user, setUser] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: "pending",
    }));
    try {
      const { data } = await client.get(`/${user}`);
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data,
        status: "resolved",
      }));
    } catch (error) {
      setUserInfo((curentUserInfo) => ({
        ...curentUserInfo,
        data: null,
        status: "rejected",
      }));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="Github ID"
      />
    </form>
  );
}

export default SearchBar;
