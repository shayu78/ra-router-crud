import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import { Link } from 'react-router-dom';

export default function ListItem(props) {
  const { className, item } = props;

  return (
    <li className={className}>
      <Link key={item.id} className='list__item__link' to={`/posts/${item.id}`}>
        <Post item={item} />
      </Link>
    </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object.isRequired,
};
