import Post from "../post/post";
import { usePosts } from "./usePosts";

const Posts = () => {
  const { data, isLoading, isFetching, isError } = usePosts();
  if (isLoading || isFetching) return <div>loading...</div>;
  if (isError) return <div>ERROR</div>;

  return (
    <div>
      {
        <ul className="grid grid-cols-1 gap-y-4 justify-center items-center">
          {data?.slice(0, 6).map((i) => (
            <Post key={i.id} title={i.title} description={i.body} />
          ))}
        </ul>
      }
    </div>
  );
};

export default Posts;
