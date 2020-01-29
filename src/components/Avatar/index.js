import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { AvatarWrappet } from './styles';

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <AvatarWrappet fluid={avatarImage.childImageSharp.fluid} />
}
