import React, { useState } from "react";
import WriteButton from "../../components/write/WriteButton";
import WriteTitle from "../../components/write/WriteTitle";
import WriteTags from "../../components/write/WriteTags";
import WriteBody from "../../components/write/WriteBody";
import { postArticle } from "../../apis/article.api";
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
      <WriteButton />
    </div>
  );
}

export default Write;
