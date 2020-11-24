import React, { useContext } from 'react';
import { Context } from '../Context';
import Splash from './Splash';
import Post from './Post';

const Content = () => {
  const { postLoaded } = useContext(Context);
  return (
    <div className="Content">
      {(!postLoaded) ? <Splash /> : <Post />}
    </div>
  );
}

export default Content;