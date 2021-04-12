import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import useFetch from '../../hooks/useFetch';
import PostsContext from '../../contexts/PostsContext';

export default function PostsWidget() {
  const { setPosts } = useContext(PostsContext);
  const url = `${process.env.REACT_APP_SERVER_URL}posts`;
  const opts = { method: 'GET' };
  const [{ data, loading, error }] = useFetch(true, url, opts);

  useEffect(() => {
    if (data) setPosts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <React.Fragment>
      <div className="posts__header">
        <Link to="/posts/new" className="action__button">Создать пост</Link>
      </div>
      {loading && <span className="loading">Загрузка данных, подождите...</span>}
      {error && <span className="error">{error}</span>}
      {data && <List className='list__items' data={data}>
        {() => data.map((item) =>
          <ListItem key={item.id} className='list__item' item={item} />
        )}
      </List>}
    </React.Fragment >
  );
}
