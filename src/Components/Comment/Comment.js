import React from "react";

const Comment = ({ text, id }) => {
  return (
    <div className="flex space-x-4 m-2">
      <p className="text-orange-400">ID: {id}</p>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default Comment;
