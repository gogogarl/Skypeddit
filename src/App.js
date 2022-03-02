import React, { useContext } from 'react';
import { Context } from './Context';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Content from './components/Content';

const App = () => {
  const { apiFailed } = useContext(Context);
  return apiFailed ? (
    <Error />
  ) : (
    <div className="App">
      <Navigation />
      <Content />
    </div>
  )
};

export default App;