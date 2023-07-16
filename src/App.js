import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import BlogList from './Component/BlogList';
import BlogDetail from './Component/BlogDetail';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">My Blog</h1>
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/posts/:postId" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
