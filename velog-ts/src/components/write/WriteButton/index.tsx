import React from "react";
interface IProps {
  setIsPublishClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
function WriteButton({ setIsPublishClicked }: IProps) {
  return (
    <div>
      <button onClick={() => setIsPublishClicked(true)}>출간하기</button>
    </div>
  );
}

export default WriteButton;
