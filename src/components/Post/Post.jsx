import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import "moment/locale/ru";

export default function Post(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <div className="post__user__date__wrapper">
        <div className="post__user__icon">{item.id}</div>
        <div className="post__username__publish">
          <span className="post__username">Ivan Petrov</span>
          <span className="post__publish">{moment.duration(moment().diff(moment(item.created))).humanize()}</span>
        </div>
      </div>
      <h3 className="post__content">{item.content}</h3>
    </React.Fragment >
  );
}

Post.propTypes = {
  item: PropTypes.object.isRequired,
};
