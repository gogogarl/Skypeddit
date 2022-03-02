import React from 'react';
import classes from '../styles/Error.module.css';

const reloadPage = () => {
  window.location.reload();
}

const Error = () => {
  return (
    <div className={classes.error}>
      <div className={classes.logo} />
      <h1 className={classes.title}>Oops, there was a problem with {document.title}.</h1>
      <h1 className={classes.title}>Try turning it off and on again.</h1>
      <button className={classes.button} onClick={reloadPage}>Refresh page</button>
      <h2 className={classes.subtitle}>STARTUP_LOAD_ERROR</h2>
    </div>
  );
}

export default Error;