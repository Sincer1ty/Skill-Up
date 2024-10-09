// src/components/PostForm.js
import React, { useState } from 'react';
import './PostForm.css'; // CSS 파일을 추가

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submittedPost, setSubmittedPost] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      const postData = {
        title,
        content,
        date: new Date().toLocaleString(),
      };

      // 데이터 저장 (여기서는 간단히 상태로 처리)
      setSubmittedPost(postData);

      // 입력값 초기화
      setTitle('');
      setContent('');
    } else {
      alert('제목과 내용을 입력해주세요!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>제목: </label>
          <input
            className="input-field"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label>내용: </label>
          <textarea
            className="textarea-field"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </div>
        <button type="submit">게시글 작성</button>
      </form>

      {submittedPost && (
        <div style={{ marginTop: '20px' }}>
          <h3>작성된 게시글</h3>
          <p><strong>제목:</strong> {submittedPost.title}</p>
          <p><strong>내용:</strong> {submittedPost.content}</p>
          <p><strong>작성 날짜:</strong> {submittedPost.date}</p>
        </div>
      )}
    </div>
  );
};

export default PostForm;
