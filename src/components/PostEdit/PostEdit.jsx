import React, { useState, useEffect, useContext, useRef } from 'react';
import PostsContext from '../../contexts/PostsContext';
import useFetch from '../../hooks/useFetch';

export default function PostEdit(props) {
  const { match, history } = props;
  const { posts, setPosts } = useContext(PostsContext);
  const [action, setAction] = useState(false);
  const id = useRef(Number(match.params.id));
  const [form, setForm] = useState(posts.find((value) => value.id === id.current));

  const url = `${process.env.REACT_APP_SERVER_URL}posts`;
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id.current, "content": form.content }),
  };
  const [{ data, loading, error }] = useFetch(action, url, opts);

  useEffect(() => {
    if (action && data) {
      setPosts((prev) => prev.map((value) => value.id === id.current ? { ...value, content: form.content } : value));
      history.goBack();
    }
    if (error) setAction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, data, error]);

  const onClose = () => history.goBack();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.content.trim().length) setForm({ id: id.current, content: '' });
    else setAction(true);
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <React.Fragment>
      {loading && <span className="loading">Сохранение данных, подождите...</span>}
      {error && <span className="error">{error}</span>}
      <div className="post__wrapper">
        <div className="post__header">
          <span className="post__header__text">Редактировать публикацию</span>
          <i className="post__close material-icons" onClick={onClose}>close</i>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__data">
            <div className="post__user__icon">{form.id}</div>
            <textarea className="form__ta" name='content' onChange={onInputChange} value={form.content} required />
          </div>
          <div className="button__wrapper">
            <button className="action__button">Сохранить</button>
          </div>
        </form>
      </div>
    </React.Fragment >
  );
}
