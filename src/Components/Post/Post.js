import React, { useState } from "react";
import Comment from "../Comment/Comment";

const Post = () => {
  const [likesNumber, setLikeNumber] = useState(0);
  const [commentShow, setCommentShow] = useState(false);
  const commentArrayExp = [{ id: 1, text: "First Comment" }];
  const [commentArray, setCommentArray] = useState(commentArrayExp);
  const handleLike = () => {
    let modifiedLikeNumber = likesNumber;
    setLikeNumber(modifiedLikeNumber + 1);
  };
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const commentObj = { id: 1, text: comment };
    const modifiedCommentArray = [...commentArray, commentObj];
    setCommentArray(modifiedCommentArray);
    event.target.reset();
  };

  return (
    <div className="w-full my-2 bg-green-500 p-5">
      <div className="flex items-center bg-blue-500">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src="https://images.unsplash.com/photo-1658685199591-85092da578c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="random stranger"
        />
        <h3>Name:</h3>
      </div>
      <div className="p-2">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          iusto cumque perspiciatis odio. Pariatur officia incidunt porro vitae
          obcaecati earum id, mollitia inventore corrupti consectetur?
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <button
            onClick={handleLike}
            className="mr-4 bg-blue-400 hover:bg-white border-0 hover:border-2 border-blue-400 p-2 rounded-md text-white hover:text-blue-400"
          >
            Like
          </button>
          <button
            onClick={() => setCommentShow(!commentShow)}
            className=" mr-4 bg-blue-400 hover:bg-white border-0 hover:border-2 border-blue-400 p-2 rounded-md text-white hover:text-blue-400"
          >
            Comment
          </button>
        </div>
        <h3 className="text-blue-400">
          {likesNumber} Likes {!commentArray ? "0" : commentArray.length}{" "}
          comments
        </h3>
      </div>
      {/* comment section */}
      {commentShow && (
        <div className="my-2">
          {/* input div */}
          <form className="w-full space-x-2" onSubmit={handleCommentSubmit}>
            <input type="text" name="comment" className="w-[80%]" />
            <input
              type="submit"
              value="send"
              className="w-[18%] bg-blue-400 text-white hover:bg-white border-0 hover:border-2 border-blue-400 hover:text-blue-400 rounded-sm"
            />
          </form>
          {commentArray.map((comment) => (
            <Comment key={comment.id} id={comment.id} text={comment.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
