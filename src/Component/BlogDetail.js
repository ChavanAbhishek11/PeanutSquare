// BlogDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./BlogDetail.css"

// BlogDetail component displays a single blog post and its comments
function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch individual blog post by ID
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Fetch comments for the blog post
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [postId]);

  return (
    <div>
      {/* Display blog post if available, otherwise show loading message */}
      {post ? (
        <div>
          <h2 className="mt-4">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}

      <h3>Comments</h3>
      {/* Display comments if available, otherwise show a message */}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong> - {comment.body}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
}

export default BlogDetail;
