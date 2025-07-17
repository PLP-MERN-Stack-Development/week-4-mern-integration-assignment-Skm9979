import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import PostView from '../components/PostView';
import CategoryList from '../components/CategoryList';
import { fetchPosts, fetchCategories } from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts().then(setPosts);
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div>
      <CategoryList categories={categories} />
      {selectedPost ? (
        <PostView post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <PostList posts={posts} onSelect={setSelectedPost} />
      )}
    </div>
  );
};

export default Home; 