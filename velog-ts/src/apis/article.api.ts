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

export const postImage = async (formData: FormData) => {
  try {
    const data = await serverAxios.post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteArticle = async (articleId: string) => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/${articleId}`);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
