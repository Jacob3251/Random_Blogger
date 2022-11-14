import logo from "./logo.svg";
import "./App.css";
import PostBox from "./Components/PostBox/PostBox";
import PostContainer from "./Components/PostContainer/PostContainer";

function App() {
  return (
    <div className=" flex justify-center items-center bg-indigo-400 h-[100vh] ">
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
