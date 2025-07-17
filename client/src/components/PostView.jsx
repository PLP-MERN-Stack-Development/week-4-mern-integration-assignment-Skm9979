import React from 'react';

const PostView = ({ post, onBack }) => {
  if (!post) return null;
  return (
    <div>
      <button onClick={onBack}>Back to List</button>
      <h2>{post.title}</h2>
      <p><strong>Category:</strong> {post.category?.name || ''}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default PostView; 