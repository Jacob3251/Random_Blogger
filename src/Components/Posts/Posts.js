import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const storedposts = localStorage.getItem("userpost");
    if (storedposts) {
      const postsItems = JSON.parse(storedposts);
      //   console.log(postsItems);
      setPosts(postsItems.reverse());
    }
  }, [posts]);

  return (
    <div className="w-[80%] mx-auto ">
      <h3 className="text-center text-2xl text-white">
        --- Here Posts are Shown below ---
      </h3>
      <h3 className="text-2xl font-mono">
        Total Posts: <span className="text-red-500">{posts?.length}</span>
      </h3>
      {posts.length === 0 ? (
        <h3>No posts</h3>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Posts;
