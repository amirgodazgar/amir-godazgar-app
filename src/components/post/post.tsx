import React from "react";

type Props = {
  title: string;
  description: string;
};

const Post = (props: Props) => {
  const { title, description } = props;
  return (
    <li>
      {title} -- {description}
    </li>
  );
};

export default Post;
