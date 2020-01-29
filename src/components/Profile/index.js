import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import { ProfileAuthor, ProfileDescription, ProfileLink, ProfilePosition, ProfileWrapper } from './styles'
import getThemeColor from "../../utils/getThemeColor"

export default function Profile() {
  const { site: { siteMetadata: { author, position, description } } } =
    useStaticQuery(
      graphql`
        query MySiteMetadata {
          site {
            siteMetadata {
              position
              description
              author
            }
          }
        }`
    )

  return (
    <ProfileWrapper>
      <ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to="/"
      >
        <Avatar />
        < ProfileAuthor >
          {author}

          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor >
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper >
  )
}
