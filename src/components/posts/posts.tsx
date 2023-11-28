import Pagination from "../pagination/pagination";
import { UsePagination } from "../pagination/use-pagination";
import Post from "../post/post";
import { TPost, usePosts } from "./usePosts";

const Posts = () => {
  console.log('POSTsssss')

  const { data, isLoading, isFetching, isError } = usePosts();
  const { data: posts, pages, setCurrentPage } = UsePagination(data);

  console.log(posts)

  if (isLoading || isFetching) return <div>loading...</div>;
  if (isError) return <div>ERROR</div>;


  return (
    <div>
      <ul className="grid grid-cols-1 gap-y-4 justify-center items-center">
        {posts?.map((i: TPost) => (
          <Post key={i.id} title={i.title} description={i.body} />
        ))}
      </ul>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Posts;
