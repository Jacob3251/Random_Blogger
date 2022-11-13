import React, { useRef } from "react";

const PostBox = () => {
  const formRef = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
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
        type="submmit"
        value="Create Post"
        className="block mt-2 mb-5 w-full h-[40px] text-center bg-blue-400 hover:bg-white border-0 hover:border-2 hover:border-blue-400 text-white hover:text-blue-400 hover:scale-95  duration-200"
      />
    </form>
  );
};

export default PostBox;
