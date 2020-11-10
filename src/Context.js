import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    posts: [],
    postsLoaded: false,
    post: {},
    postIDActive: '',
    postLoaded: false,
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
    this.setState({ posts: posts, postsLoaded: true });
  }

  getPost = id => {
    this.setState(prevState => ({
      post: prevState.posts.filter(post => post.data.id === id)[0].data,
      postIDActive: id,
      postLoaded: true
    }));
  }

  render() {
    return (
      <Context.Provider value={{
        posts: this.state.posts,
        postsLoaded: this.state.postsLoaded,
        post: this.state.post,
        postIDActive: this.state.postIDActive,
        postLoaded: this.state.postLoaded,
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