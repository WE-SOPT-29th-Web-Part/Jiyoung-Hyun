import React, { useState } from "react";
import WriteButton from "../../components/write/WriteButton";
import WriteTitle from "../../components/write/WriteTitle";
import WriteTags from "../../components/write/WriteTags";
import WriteBody from "../../components/write/WriteBody";
import { postArticle } from "../../apis/article.api";
import WriteDetail from "../../components/write/WriteDetail";
function Write() {
  const [articleData, setArticleData] = useState({
    title: "",
    body: "",
    summary: "",
    thumbnail: "",
    tags: [""],
  });
  const submitArticle = async () => {
    await postArticle(articleData);
  };
  const [isPublishClicked, setIsPublishClicked] = useState(false);

  return (
    <div>
      <button onClick={submitArticle}>submit</button>
      <WriteTitle setArticleData={setArticleData} />
      <WriteTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <WriteBody setArticleData={setArticleData} />
      <WriteButton setIsPublishClicked={setIsPublishClicked} />
      <WriteDetail
        articleData={articleData}
        setArticleData={setArticleData}
        isPublishClicked={isPublishClicked}
        setIsPublishClicked={setIsPublishClicked}
        submitArticle={submitArticle}
      />
    </div>
  );
}

export default Write;
