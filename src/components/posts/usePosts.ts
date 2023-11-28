import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/get-posts";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePosts = () => {
  const { data, isLoading, isFetching,isError } = useQuery<TPost[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return {
    data: isLoading ? [] : data,
    isLoading,
    isFetching,
    isError
  };
};
