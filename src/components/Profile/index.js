import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import { ProfileAuthor, ProfileDescription, ProfileLink, ProfilePosition, ProfileWrapper } from './styles'

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
      <ProfileLink>
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
