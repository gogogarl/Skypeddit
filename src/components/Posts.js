import React, { useContext } from 'react';
import { Context } from '../Context';
import PostsListItem from './PostsListItem';

const Posts = () => {
  const { posts } = useContext(Context);
  return (
    <div className="Posts">
      {posts.map((post) =>
        <PostsListItem
          key={post.data.id}
          postID={post.data.id}
          post={post.data}
        />
      )}
    </div>
  );
}

export default Posts;