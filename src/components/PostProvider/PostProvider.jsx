import React, { useState } from 'react';
import PostsContext from '../../contexts/PostsContext';

export default function PostProvider(props) {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostsContext.Provider>
  )
}
