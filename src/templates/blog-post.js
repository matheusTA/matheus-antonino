import React from 'react';
import { graphql } from 'gatsby'


import Layout from "../components/Layout"
import SEO from "../components/seo"

import { PostHeader, PostTitle, PostDescription, PostDate, MainContent, } from '../components/Post/styles'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostHeader>
        <PostDate>{post.frontmatter.date} * {post.timeToRead} mim de leitura</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`
