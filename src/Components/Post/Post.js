import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import { v4 as uuidv4 } from "uuid";
import logo from "./expert-5.jpg";
const Post = ({ post }) => {
  const { id, name, text, comment } = post;
  const [likesNumber, setLikeNumber] = useState(0);
  const [commentShow, setCommentShow] = useState(false);
  const [commentArray, setCommentArray] = useState([]);
  const [commentArrayShow, setCommentArrayShow] = useState([]);
  //   const [posts, setPosts] = useState([]);

  const handleLike = () => {
    let modifiedLikeNumber = likesNumber;
    setLikeNumber(modifiedLikeNumber + 1);
  };
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const commentValue = event.target.comment.value;
    const commentObj = { id: id + uuidv4(), text: commentValue };
    // console.log("Comment Object", commentObj);
    const storedPosts = localStorage.getItem("userpost");
    if (storedPosts) {
      const posts = JSON.parse(storedPosts);
      const neededpost = posts.filter((post) => post.id !== id);

      //   const modifiedCommentArray = [...comment, [commentObj]];
      //   console.log("local storage", comment);
      //   console.log("modifiedCommentArray", modifiedCommentArray);
      //   let updatedCommentArray;
      if (comment.length !== 0) {
        const modifiedComments = [...comment, commentObj];
        console.log("modifiedComments", modifiedComments);
        const updatedPost = {
          id: id,
          name: name,
          text: text,
          comment: modifiedComments,
        };
        console.log("updatedpost", updatedPost);
        const modifiedPosts = [...neededpost, updatedPost];
        localStorage.setItem("userpost", JSON.stringify(modifiedPosts));
        // console.log("updatedPost", updatedPost);
      } else {
        const updatedCommentArray = [commentObj];
        // setCommentArray(updatedCommentArray);
        const updatedPost = {
          id: id,
          name: name,
          text: text,
          comment: updatedCommentArray,
        };
        const modifiedPosts = [...neededpost, updatedPost];
        localStorage.setItem("userpost", JSON.stringify(modifiedPosts));
        // console.log("updatedPost", updatedPost);
      }

      const storedposts = JSON.parse(storedPosts);
      const neededshowCommentPost = storedposts.find((u) => u.id === id);
      setCommentArrayShow(neededshowCommentPost.comment);
    }

    event.target.reset();
  };
  useEffect(() => {
    const storedPosts = localStorage.getItem("userpost");
    if (storedPosts) {
      const storedpost = JSON.parse(storedPosts);
      const neededpost = storedpost.find((u) => u.id === id);
      console.log(neededpost.comment);
      setCommentArray(neededpost.comment);
    }
  }, [commentArray]);

  return (
    <div className="w-full my-2 bg-slate-200  rounded-md p-5 ">
      <div className="flex items-center bg-slate-100 my-2 p-2 rounded-full">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={logo}
          alt="random stranger"
        />
        <h3 className="ml-5 text-md">{name}</h3>
      </div>
      <div className="p-2 my-2">
        <p className="text-sm font-sm">{text}</p>
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
          {likesNumber} Likes {commentArray.length} comments
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
          {commentArray &&
            commentArray
              .reverse()
              .map((comment) => (
                <Comment key={comment.id} id={comment.id} text={comment.text} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Post;
