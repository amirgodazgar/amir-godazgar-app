import Pagination from "../pagination/pagination";
import { UsePagination } from "../pagination/use-pagination";
import Post from "../post/post";
import { TPost, usePosts } from "./usePosts";

const Posts = () => {
  console.log("POSTS");

  const { data, isLoading, isFetching, isError } = usePosts();
  const { data: posts, pages, onCurrentPage } = UsePagination(data);

  if (isLoading || isFetching) return <div>loading...</div>;
  if (isError) return <div>ERROR</div>;

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ul className="grid grid-cols-1 gap-y-4 justify-center items-center mb-4">
        {posts?.map((i: TPost) => (
          <Post key={i.id} title={i.title} description={i.body} />
        ))}
      </ul>
      <Pagination pages={pages} onCurrentPage={onCurrentPage} />
    </div>
  );
};

export default Posts;
