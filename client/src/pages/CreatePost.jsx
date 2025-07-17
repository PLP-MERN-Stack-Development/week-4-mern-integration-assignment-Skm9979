import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import { createPost, fetchCategories } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSubmit = async (data) => {
    await createPost(data);
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <PostForm onSubmit={handleSubmit} categories={categories} />
    </div>
  );
};

export default CreatePost; 