// src/App.js
import React from 'react';
import './App.css'; // CSS 파일을 추가
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <h1>게시글 작성 페이지</h1>
      <PostForm />
    </div>
  );
}

export default App;
