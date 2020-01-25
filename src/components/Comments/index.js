import React from 'react'
import ReactDisqusComments from 'react-disqus-comments';
import PropTypes from "prop-types"

import { CommentsWrapper, CommentsTitle } from './styles'

export default function Comments({ url, title }) {
  const completeURL = `${process.env.GATSBY_URL_DISQUS_COMMENTS}${url}`

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname={process.env.GATSBY_SHORT_NAME_DISQUS_COMMENTS}
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

