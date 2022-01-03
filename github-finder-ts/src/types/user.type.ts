import { IGithubResponse } from "./githubResponse.type";
export interface IUserInfo {
  status: "idle" | "pending" | "resolved" | "rejected";
  data: IGithubResponse | null;
}
