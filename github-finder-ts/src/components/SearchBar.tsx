import React, { useState, useEffect } from "react";
import { IUserInfo } from "../types/user.type";
import { client } from "../libs/api";
import SearchHistory from "./SearchHistory";
interface IProps {
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}
function SearchBar({ setUserInfo }: IProps): React.ReactElement {
  const [user, setUser] = useState("");
  const [historyList, setHistoryList] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("history");
    // JSON.parse 의 반환값은 any -> JSON을 파싱한 결과를 그대로 setHistory 의 인자로 넘기는게 안전하지 않음
    // const isStringArray = (arr: any[]): arr is string[] => arr.every((elem) => typeof elem === 'string');
    // const safeJSONparseWithStringArr = (json: string): string[] => {
    //   try {
    //     const parseResult = JSON.parse(json);
    //     if (!(parseResult instanceof Array)) return [];
    //     if (!isStringArray(parseResult)) return [];
    //     return parseResult;
    //   } catch (error) {
    //     throw Error('failed to parse JSON');
    //   }
    // };
    if (storedHistory) setHistoryList(JSON.parse(storedHistory));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleUserInfo = async (user: string) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUserInfo(user);

    const newHistory = Array.from(new Set([...historyList, user])).slice(-3);
    setHistoryList(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
    setUser("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={handleChange}
          placeholder="Github ID"
        />
      </form>
      <SearchHistory
        historyList={historyList}
        setHistoryList={setHistoryList}
        handleUserInfo={handleUserInfo}
      />
    </>
  );
}

export default SearchBar;
