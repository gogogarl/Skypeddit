import React, { useContext } from 'react';
import { Context } from '../Context';
import helpers from '../utilities/helpers';
import classes from '../styles/PostsListItem.module.css';

const PostsListItem = (props) => {
  const { postIDActive, actions } = useContext(Context);
  const thumbnail = (props.post.preview) ? { backgroundImage: `url(${helpers.fixImageURL(props.post.preview.images[0].resolutions[0].url)})` } : null;
  const classesToggle = (postIDActive === props.postID) ? `${classes.item} ${classes.active}` : `${classes.item}`;
  return (
    <div className={classesToggle} onClick={actions.getPost.bind(this, props.postID)}> {/* () => actions.getPost(props.postID) */}
      <div className={classes.thumbnail} style={thumbnail} />
      <div className={classes.content}>
        <h4 className={classes.author}>{props.post.author}</h4>
        <h3 className={classes.title}>{props.post.title}</h3>
      </div>
      <div className={classes.date}>{helpers.postTime(props.post.created_utc)}</div>
    </div>
  );
}

export default PostsListItem;