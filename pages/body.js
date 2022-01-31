import React from "react";

const Body = ({ posts  }) => {
  
  return (
    <ul className="list-group mb-3">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.id} -- {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Body;