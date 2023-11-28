import React from "react";

type Props = {
  title: string;
  description: string;
};

const Post = (props: Props) => {
  const { title, description } = props;
  return (
    <li className="text-md text-gray-900 w-[50%] border rounded m-auto p-4 flex justify-between items-center h-full">
      <div className="flex flex-col justify-start items-start w-[70%]">
        <span className="text-lg font-bold text-gray-800">{title}</span>
        <span className="text-md text-gray-500 w-[80%] truncate">
          {description}
        </span>
      </div>
      <div className="flex justify-center items-center w-[30%] h-full border">
        icons
      </div>
    </li>
  );
};

export default Post;
