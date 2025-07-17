import React from 'react';

const CategoryList = ({ categories }) => (
  <div>
    <h3>Categories</h3>
    <ul>
      {categories.map(cat => (
        <li key={cat._id}>{cat.name}</li>
      ))}
    </ul>
  </div>
);

export default CategoryList; 