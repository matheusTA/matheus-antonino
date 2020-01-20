import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import { ProfileAuthor, ProfileDescription, ProfileLink, ProfilePosition, ProfileWrapper } from './styles'

export default function Profile() {
  const { site: { siteMetadata: { title, position, description } } } =
    useStaticQuery(
      graphql`
        query MySiteMetadata {
          site {
            siteMetadata {
              position
              description
              title
            }
          }
        }`
    )

  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />
        < ProfileAuthor >
          {title}

          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor >
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper >
  )
}
