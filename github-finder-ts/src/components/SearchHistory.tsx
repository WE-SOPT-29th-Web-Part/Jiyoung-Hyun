import React from "react";
import HistoryItem from "./HistoryItem";
interface IProps {
  historyList: string[];
  setHistoryList: React.Dispatch<React.SetStateAction<string[]>>;
  handleUserInfo: (user: string) => Promise<void>;
}

function SearchHistory({
  historyList,
  setHistoryList,
  handleUserInfo,
}: IProps) {
  return (
    <div>
      {historyList &&
        historyList.map((history: string, index: number) => (
          <HistoryItem
            key={index}
            history={history}
            historyList={historyList}
            setHistoryList={setHistoryList}
            handleUserInfo={handleUserInfo}
          ></HistoryItem>
        ))}
    </div>
  );
}

export default SearchHistory;
