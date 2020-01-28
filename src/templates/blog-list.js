import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import { ListWrapper } from '../components/ListWrapper/styles'

export default function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/posts/' : `/posts/page/${currentPage - 1}`
  const nextPage = `/posts/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Posts" />
      <ListWrapper>
        {postList.map(({ node: { frontmatter: { background, category, date, title, description }, timeToRead, fields: { slug } } }, i) => (
          <PostItem
            key={i}
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
        ))}
      </ListWrapper>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: $limit
        skip: $skip
        ) {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
              description
              title
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
`
