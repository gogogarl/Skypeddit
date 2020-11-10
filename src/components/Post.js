import React from 'react';
import { Consumer } from '../Context';
import helpers from '../utilities/helpers';
import classes from '../styles/Post.module.css';

const Post = () => {
  return (
    <Consumer>
      {({ post }) => {
        const image = (post.preview) ? <a href={post.url} target="_blank" rel="noopener noreferrer"><img className={classes.image} src={helpers.fixImageURL(post.preview.images[0].source.url)} alt={post.title} /></a> : null;
        const comment = (post.selftext) ? <div className={classes.comment} dangerouslySetInnerHTML={{ __html: post.selftext }} /> : null;
        return (
          <div className={classes.item}>
            <div className={classes.date}><span>{helpers.postDate(post.created_utc)}</span></div>
            <div className={classes.post}>
              <div className={classes.avatar}><span>{post.author.substring(0, 2)}</span></div>
              <div className={classes.content}>
                <div className={classes.author}>{post.author}, {helpers.postTime(post.created_utc)}</div>
                <a className={classes.link} href={post.url} target="_blank" rel="noopener noreferrer"><h3 className={classes.title}>{post.title}</h3><span className={classes.domain}>{post.domain}</span></a>
                {image}
                {comment}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Post;