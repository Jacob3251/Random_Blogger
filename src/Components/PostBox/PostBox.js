import React, { useRef, useState } from "react";

const PostBox = () => {
  const formRef = useRef();
  // const [posts, setPosts] = usePost();
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const name = formRef.current[0].value;

    const text = formRef.current[1].value;
    const time = new Date();
    const milisec = time.getMilliseconds();

    const postObj = { id: milisec, name: name, text: text, comment: [] };

    let posts = [postObj];
    const storedposts = localStorage.getItem("userpost");
    if (storedposts) {
      const postsObj = JSON.parse(storedposts);
      // console.log(postsObj);
      const modifiedPostsObj = [...postsObj, postObj];
      localStorage.setItem("userpost", JSON.stringify(modifiedPostsObj));
    } else {
      const newPost = JSON.stringify(posts);

      localStorage.setItem("userpost", newPost);
    }

    if (!storedposts) {
      window.location.reload();
    }
    alert("Post updated");
    e.target.reset();
  };
  return (
    <form
      onSubmit={formSubmit}
      ref={formRef}
      className="w-[65%] bg-slate-100 mx-auto my-5 px-5 py-2 rounded-lg"
    >
      <input
        type="text"
        name="name"
        className="block my-2 w-full h-[40px] pl-5 text-xl rounded-sm"
        placeholder="Enter name"
      />
      <input
        type="text"
        name="post"
        className="block my-2 w-full h-[40px] pl-5 text-xl  rounded-sm"
        placeholder="Enter post"
      />
      <input
        type="submit"
        value="Create Post"
        className="block mt-2 mb-5 w-full h-[40px] text-center bg-blue-400 hover:bg-white border-0 hover:border-2 hover:border-blue-400 text-white hover:text-blue-400 hover:scale-95  duration-200"
      />
    </form>
  );
};

export default PostBox;
