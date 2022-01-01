import { serverAxios } from "../libs/axios";
import { IArticle } from "../types/article.type";

const PREFIX_URL = "/article";

export const getArticleList = async () => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}`);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
