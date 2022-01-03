import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://localhost:5005/api/",
});
