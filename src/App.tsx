import Posts from "./components/posts/posts";
import PostForm from "./components/post-form/post-form";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800 h-screen">
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
