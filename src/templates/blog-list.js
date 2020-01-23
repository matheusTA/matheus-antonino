import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

export default function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges
  console.log(postList);
  return (
    <Layout>
      <SEO title="Posts" />
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
