import React from 'React'
import { Link } from 'gatsby'
import propTypes from "prop-types"

import { PaginationWrapper } from './styles'

export default function Pagination({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) {
  return (
    <PaginationWrapper>
      {!isFirst && <Link to={prevPage}>Página anterior</Link>}
      <p>{currentPage} De {numPages}</p>
      {!isLast && <Link to={nextPage}>Próxima página</Link>}
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
