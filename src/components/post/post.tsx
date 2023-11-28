type Props = {
  title: string;
  description: string;
};

const Post = (props: Props) => {
  console.log("POST");
  const { title, description } = props;
  return (
    <li className="text-md text-gray-900 w-[48rem] min-h-[6rem] border rounded m-auto p-4 flex flex-col justify-start items-starth-full bg-white">
      <span className="text-lg font-bold text-gray-800 truncate w-[90%]">
        {title}
      </span>
      <span className="text-md text-gray-500 w-[80%] truncate">
        {description}
      </span>
    </li>
  );
};

export default Post;
