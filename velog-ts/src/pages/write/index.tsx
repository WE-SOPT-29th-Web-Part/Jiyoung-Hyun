import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import WriteButton from "../../components/write/WriteButton";
import WriteTitle from "../../components/write/WriteTitle";
import WriteTags from "../../components/write/WriteTags";
import WriteBody from "../../components/write/WriteBody";
import { postArticle } from "../../apis/article.api";
import WriteDetail from "../../components/write/WriteDetail";
function Write() {
  const location = useLocation();
  const article = location.state;

  const [articleData, setArticleData] = useState(
    article ?? {
      title: "",
      body: "",
      summary: "",
      thumbnail: "",
      tags: [""],
    }
  );
  const submitArticle = async () => {
    await postArticle(articleData);
  };
  const [isPublishClicked, setIsPublishClicked] = useState(false);

  const handleDataChange = (
    key: "title" | "body" | "summary" | "thumbnail",
    value: string
  ) => {
    // key: title, body, summary, thumbnail
    // value: e.target.value
    const tempArticleData = { ...articleData };
    // 객체 복사 -> 상태는 불변성을 유지해야한다.
    // 상태는 직접 변경하면 안되고 새로운 데이터를 정의해서 넣어주어야함
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };

  const handleArrDataChange = (key: "tags", value: string) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };

  const handleArrDataRemove = (key: "tags", innerText: string) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (el: string) => el !== innerText
    );
    setArticleData(tempArticleData);
  };
  return (
    <div>
      <WriteTitle title={article.title} onDataChange={handleDataChange} />
      <WriteTags
        tags={articleData.tags}
        articleData={articleData}
        onArrDataChange={handleArrDataChange}
        onArrDataRemove={handleArrDataRemove}
      />
      <WriteBody body={article.body} onDataChange={handleDataChange} />
      <WriteButton setIsPublishClicked={setIsPublishClicked} />
      <WriteDetail
        summary={article.titsummaryle}
        onDataChange={handleDataChange}
        isPublishClicked={isPublishClicked}
        setIsPublishClicked={setIsPublishClicked}
        submitArticle={submitArticle}
      />
    </div>
  );
}

export default Write;
