import React from 'React'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import propTypes from "prop-types"

import { PaginationWrapper } from './styles'
import getThemeColor from "../../utils/getThemeColor"

export default function Pagination({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) {
  return (
    <PaginationWrapper>
      {!isFirst && <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}>Página anterior</AniLink>}
      <p>{currentPage} De {numPages}</p>
      {!isLast && <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}>Próxima página</AniLink>}
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
