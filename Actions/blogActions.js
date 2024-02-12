import { performGetAPIAction } from "./performAPIAction";
import { API } from "../config";

export const allBlog = async () => {
  const url = `${API}/blog/all-blogs`;
  return performGetAPIAction(url);
};
