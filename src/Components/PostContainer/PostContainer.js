import React from "react";
import PostBox from "../PostBox/PostBox";
import Posts from "../Posts/Posts";

const PostContainer = () => {
  return (
    <div className="w-[80%] bg-blue-400 h-[80%] rounded-xl">
      <PostBox />
      <Posts />
    </div>
  );
};

export default PostContainer;
