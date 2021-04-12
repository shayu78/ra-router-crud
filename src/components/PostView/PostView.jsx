import React, { useState, useContext, useEffect, useRef } from 'react';
import PostsContext from '../../contexts/PostsContext';
import useFetch from '../../hooks/useFetch';
import moment from 'moment';
import "moment/locale/ru";

export default function PostView(props) {
  const { match, history } = props;
  const { posts } = useContext(PostsContext);
  const [action, setAction] = useState(false);
  const id = useRef(Number(match.params.id));
  const post = posts.find((value) => value.id === id.current);

  const url = `${process.env.REACT_APP_SERVER_URL}posts/${id.current}`;
  const opts = {
    method: 'DELETE',
  };
  const [{ data, loading, error }] = useFetch(action, url, opts);

  useEffect(() => {
    if (action && data) history.goBack();
    if (error) setAction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, data, error]);

  const onDelete = () => setAction(true);

  const onEdit = () => history.push(`/posts/edit/${id.current}`);

  return (
    <React.Fragment>
      {loading && <span className="loading">Удаление данных, подождите...</span>}
      {error && <span className="error">{error}</span>}
      {post && <div className="post__view">
        <div className="post__user__date__wrapper">
          <div className="post__user__icon">{post.id}</div>
          <div className="post__username__publish">
            <span className="post__username">Ivan Petrov</span>
            <span className="post__publish">{moment.duration(moment().diff(moment(post.created))).humanize()}</span>
          </div>
        </div>
        <h3 className="post__content">{post.content}</h3>
        <div className="button__wrapper">
          <button className="action__button" onClick={onEdit}>Изменить</button>
          <button className="action__button red__bg" onClick={onDelete}>Удалить</button>
        </div>
      </div>}
    </React.Fragment >
  );
}
