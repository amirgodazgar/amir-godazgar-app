import { TPost } from "../components/posts/usePosts";
import https from "./https";

export const CreatePost = async (body: TPost) => {
  const response = await https.post("/posts", {
    ...body,
  });
  return response.data;
};
