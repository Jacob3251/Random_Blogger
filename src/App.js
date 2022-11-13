import logo from "./logo.svg";
import "./App.css";
import PostBox from "./Components/PostBox/PostBox";
import PostContainer from "./Components/PostContainer/PostContainer";

function App() {
  return (
    <div className="bg-red-500 flex justify-center items-center h-[100vh] w-[100vw]">
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
