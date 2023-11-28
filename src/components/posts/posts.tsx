import { useCallback } from "react";
import Loading from "../loading/loading";
import Pagination from "../pagination/pagination";
import { UsePagination } from "../pagination/use-pagination";
import Post from "../post/post";
import { TPost, usePosts } from "./usePosts";

const Posts = () => {
  console.log("POSTS");

  const { data, isLoading, isError } = usePosts();
  const { data: posts, pages, setCurrentPage } = UsePagination(data);

  const onCurrentPage = useCallback(setCurrentPage, [setCurrentPage]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <Loading />
      </div>
    );

  if (isError) return <div className="text-red-600">ERROR</div>;

  return (
    <div className="flex flex-col justify-center items-center w-full h-[30rem]">
      <ul className="grid grid-cols-1 gap-y-4 justify-center items-center mb-4">
        {posts?.map((i: TPost) => (
          <Post key={i.id} title={i.title} description={i.body} />
        ))}
      </ul>
      {}
      <Pagination pages={pages} onCurrentPage={onCurrentPage} />
    </div>
  );
};

export default Posts;
