import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    posts: [],
    post: {},
    postIDActive: '',
    postsLoaded: false,
  };

  componentDidMount() {
    if (!this.state.postsLoaded) {
      this.getPosts();
    }
  }

  getPosts = async () => {
    const response = await fetch('https://www.reddit.com/.json');
    const data = await response.json();
    const posts = data.data.children;
    const post = posts[0].data;
    const postIDActive = post.id;
    this.setState({ posts: posts, post: post, postIDActive: postIDActive, postsLoaded: true });
  }

  getPost = id => {
    const posts = this.state.posts;
    const post = posts.filter(post => post.data.id === id)[0].data;
    this.setState({ post: post, postIDActive: id });
  }

  render() {
    return (
      <Context.Provider value={{
        posts: this.state.posts,
        post: this.state.post,
        postIDActive: this.state.postIDActive,
        postsLoaded: this.state.postsLoaded,
        actions: {
          getPost: this.getPost
        }
      }}>
        { this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;