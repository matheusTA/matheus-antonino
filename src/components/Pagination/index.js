import React from 'React'
import { Link } from 'gatsby'
import propTypes from "prop-types"

import { PaginationWrapper } from './styles'

export default function Pagination({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) {
  return (
    <PaginationWrapper>
      {!isFirst && <Link to={prevPage}>Previous page</Link>}
      <p>{currentPage} Of {numPages}</p>
      {!isLast && <Link to={nextPage}>Next page</Link>}
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}
