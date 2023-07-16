// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogList.module.css';

// BlogList component displays a list of blog posts
// `posts` prop should be an array of blog post objects
function BlogList({ posts }) {
  return (
    <div className={`${styles.blogList} container`}>
      <h2 className="mb-4">Blog List</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className={`${styles.blogItem} list-group-item`}>
            {/* Link to individual blog post detail page */}
            <Link to={`/posts/${post.id}`} className={`${styles.blogLink}`}>
              <h3 className={`${styles.blogTitle}`}>{post.title}</h3>
            </Link>
            <Link to={`/posts/${post.id}`}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
