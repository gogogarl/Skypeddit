import React from 'react';
import { Consumer } from '../Context';
import PostsListItem from './PostsListItem';

const Posts = () => {
  return (
    <Consumer>
      {({ posts }) => (
        <div className="Posts">
          {posts.map((post) =>
            <PostsListItem
              key={post.data.id}
              postID={post.data.id}
              post={post.data}
            />
          )}
        </div>
      )}
    </Consumer>
  );
}

export default Posts;