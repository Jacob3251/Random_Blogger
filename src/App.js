import logo from "./logo.svg";
import "./App.css";
import PostBox from "./Components/PostBox/PostBox";
import PostContainer from "./Components/PostContainer/PostContainer";

function App() {
  return (
    <div className=" flex justify-center items-center bg-indigo-400">
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
