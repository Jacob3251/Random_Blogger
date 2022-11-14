import React from "react";
import usePost from "../../hooks/usePost";
import PostBox from "../PostBox/PostBox";
import Posts from "../Posts/Posts";

const PostContainer = () => {
  return (
    <div className="w-[100%]  h-[80%] ">
      <h1 className="text-4xl text-center my-5 text-white font-mono">
        Local Storage Blog Site...
      </h1>
      <PostBox />
      <Posts />
    </div>
  );
};

export default PostContainer;
