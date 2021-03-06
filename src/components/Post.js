import React, { useContext } from 'react';
import { Context } from '../Context';
import helpers from '../utilities/helpers';
import classes from '../styles/Post.module.css';

const Post = () => {
  const { post, apiBaseUrl } = useContext(Context);
  const image = (post.preview) ? <a href={post.url} target="_blank" rel="noopener noreferrer"><img className={classes.image} src={helpers.fixImageURL(post.preview.images[0].source.url)} alt={post.title} /></a> : null;
  const comment = (post.selftext && post.link_flair_type !== 'richtext') ? <div className={classes.comment}>{post.selftext}</div> : null;
  return (
    <div className={classes.item}>
      <div className={classes.date}><span>{helpers.postDate(post.created_utc)}</span></div>
      <div className={classes.post}>
        <div className={classes.avatar}><span>{post.author.substring(0, 2)}</span></div>
        <div className={classes.content}>
          <div className={classes.author}>{post.author}, {helpers.postTime(post.created_utc)}</div>
          <a className={classes.link} href={`${apiBaseUrl}${post.permalink}`} target="_blank" rel="noopener noreferrer"><h3 className={classes.title}>{post.title}</h3><span className={classes.domain}>{post.domain}</span></a>
          {image}
          {comment}
        </div>
      </div>
    </div>
  );
}

export default Post;