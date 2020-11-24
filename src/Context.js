import React, { useState, useEffect } from 'react';

const Context = React.createContext();

export const Provider = (props) => {
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [post, setPost] = useState({});
  const [postIDActive, setPostIDActive] = useState('');
  const [postLoaded, setPostLoaded] = useState(false);

  const apiBaseUrl = 'https://www.reddit.com/';

  useEffect(() => {
    if (!postsLoaded) {
      getPosts();
    }
  }, [postsLoaded]);

  const getPosts = async () => {
    const response = await fetch(`${apiBaseUrl}.json`);
    const data = await response.json();
    setPosts(data.data.children);
    setPostsLoaded(true);
  }

  const getPost = id => {
    setPost(posts.filter(post => post.data.id === id)[0].data);
    setPostIDActive(id);
    setPostLoaded(true);
  }

  return (
    <Context.Provider value={{
      apiBaseUrl: apiBaseUrl,
      posts: posts,
      postsLoaded: postsLoaded,
      post: post,
      postIDActive: postIDActive,
      postLoaded: postLoaded,
      actions: {
        getPost: getPost
      }
    }}>
      {props.children}
    </Context.Provider>
  );
}

export const Consumer = Context.Consumer;