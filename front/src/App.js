// src/App.js
import React, { useState } from 'react';
import './App.css'; // CSS 파일을 추가
import Search from './components/Search';
import UserList from './components/UserList';
import PostForm from './components/PostForm';

function App() {
  const [isSearching, setIsSearching] = useState(false);

  const searching = () => {
    setIsSearching(true);
  }

  return (
    <div className="App">
      <h1>게시글 작성 페이지</h1>
      <Search isSearching={searching} />
      {!isSearching && <UserList />}
      <PostForm />
    </div>
  );
}

export default App;
