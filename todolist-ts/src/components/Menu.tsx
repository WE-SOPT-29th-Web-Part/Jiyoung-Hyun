import React from "react";

interface IProps {
  setSelectedSection: (value: string) => void;
}
function Menu({ setSelectedSection }: IProps): React.ReactElement {
  return (
    <>
      <button type="button" onClick={() => setSelectedSection("today")}>
        오늘만 보기
      </button>
      <button type="button" onClick={() => setSelectedSection("tomorrow")}>
        내일만 보기
      </button>
      <button type="button" onClick={() => setSelectedSection("")}>
        둘다 보기
      </button>
    </>
  );
}

export default Menu;
