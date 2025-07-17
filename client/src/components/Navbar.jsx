import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ marginBottom: 20 }}>
    <Link to="/">Home</Link> |{' '}
    <Link to="/create">Create Post</Link>
  </nav>
);

export default Navbar; 