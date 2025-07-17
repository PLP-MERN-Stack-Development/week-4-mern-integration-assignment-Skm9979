import React, { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, categories, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, category });
  };

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
      setCategory(initialData.category || '');
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} required />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="">Select a category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm; 