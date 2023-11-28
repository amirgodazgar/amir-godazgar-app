import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/get-posts";

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePosts = () => {
  return useQuery<Posts[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
