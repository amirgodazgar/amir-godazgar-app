import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/posts/posts";
import PostForm from "./components/post-form/post-form";

function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
