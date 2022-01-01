import { serverAxios } from "../libs/axios";
import { IPostArticle } from "../types/article.type";

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

export const postArticle = async ({ ...articleData }: IPostArticle) => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}`, {
      ...articleData,
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
