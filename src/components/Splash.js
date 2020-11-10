import React from 'react';
import classes from '../styles/Splash.module.css';

const Splash = () => {
  return (
    <div className={classes.splash}>
      <div className={classes.thumbnail} />
      <div className={classes.heading}>
        <h2 className={classes.suptitle}>Welcome to</h2>
        <h1 className={classes.title}>{document.title}</h1>
      </div>
    </div>
  );
}

export default Splash;