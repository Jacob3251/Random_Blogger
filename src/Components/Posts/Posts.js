import React from "react";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className="w-[80%] mx-auto bg-yellow-300">
      <h3 className="text-center text-2xl">Here Posts are Shown below ---</h3>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
