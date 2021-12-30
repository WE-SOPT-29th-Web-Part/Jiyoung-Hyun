import React from "react";
interface IProps {
  history: string;
  historyList: string[];
  setHistoryList: React.Dispatch<React.SetStateAction<string[]>>;
  handleUserInfo: (user: string) => Promise<void>;
}

function HistoryItem({
  history,
  historyList,
  setHistoryList,
  handleUserInfo,
}: IProps) {
  const handleHistory = () => {
    const newHistory = historyList.filter((e) => e !== history);
    setHistoryList(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };
  console.log(history);
  return (
    <div onClick={() => handleUserInfo(history)}>
      <div>{history}</div>
      <button onClick={handleHistory}>X</button>
    </div>
  );
}

export default HistoryItem;
