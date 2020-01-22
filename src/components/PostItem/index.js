import React from 'react';
import PropTypes from 'prop-types'

import { PostItemDate, PostItemDescription, PostItemInfo, PostItemLink, PostItemTag, PostItemTitle, PostItemWrapper } from './styles';

export default function PostItem({ slug, background, category, date, timeToRead, title, description }) {
  return (
    <PostItemLink to={slug}>
      <PostItemWrapper>
        <PostItemTag background={background}>{category}</PostItemTag>

        <PostItemInfo>
          <PostItemDate>{date} • {timeToRead}</PostItemDate>

          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>{description}</PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
  );
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
