import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { AvatarWrappet } from './styles';

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <AvatarWrappet fixed={avatarImage.childImageSharp.fixed} />
}
