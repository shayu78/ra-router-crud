import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const DEFAULT_FORM_VALUE = {
  content: '',
};

export default function PostAdd(props) {
  const { history } = props;
  const [form, setForm] = useState(DEFAULT_FORM_VALUE);
  const [action, setAction] = useState(false);

  const url = `${process.env.REACT_APP_SERVER_URL}posts`;
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "id": 0, "content": form.content }),
  };
  const [{ data, loading, error }] = useFetch(action, url, opts);

  useEffect(() => {
    if (action && data) history.goBack();
    if (error) setAction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, data, error]);

  const onClose = () => history.goBack();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.content.trim().length) setForm(DEFAULT_FORM_VALUE);
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
          <span className="post__header__text">Добавить публикацию</span>
          <i className="post__close material-icons" onClick={onClose}>close</i>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__data">
            <div className="post__user__icon"></div>
            <textarea className="form__ta" name='content' onChange={onInputChange} value={form.content} required />
          </div>
          <div className="button__wrapper">
            <button className="action__button">Опубликовать</button>
          </div>
        </form>
      </div>
    </React.Fragment >
  );
}
