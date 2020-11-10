import React from 'react';
import { Consumer } from '../Context';
import Splash from './Splash';
import Post from './Post';

const Content = () => {
  return (
    <Consumer>
      {({ postLoaded }) => (
        <div className="Content">
          {(!postLoaded) ? <Splash /> : <Post />}
        </div>
      )}
    </Consumer>
  );
}

export default Content;