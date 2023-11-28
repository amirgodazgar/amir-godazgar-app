import https from "./https";

export const getPosts = async () => {
  const response = await https.get("/posts");
  return response.data;
};
