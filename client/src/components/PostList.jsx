import React from 'react';

const PostList = ({ posts, onSelect }) => (
  <div>
    <h2>Blog Posts</h2>
    <ul>
      {posts.map(post => (
        <li key={post._id} onClick={() => onSelect(post)} style={{ cursor: 'pointer' }}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList; 