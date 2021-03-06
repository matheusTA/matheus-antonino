import React from 'react';
import { graphql } from 'gatsby'

import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import { PostHeader, PostTitle, PostDescription, PostDate, MainContent, } from '../components/Post/styles'

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <PostHeader>
        <PostDate>{post.frontmatter.date} * {post.timeToRead} mim de leitura</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`
