import React from 'react';
import PropTypes from 'prop-types'

import Icons from './Icons'
import links from './content'
import { SocialLinkWrapper, SocialLinksList, SocialLinksItem, SocialLinksLink, IconWrapper } from './styles';

export default function SocialLinks({ hideStyle }) {
  return (
    <SocialLinkWrapper hideStyle={hideStyle}>
      <SocialLinksList>
        {links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <SocialLinksItem key={i}>
              <SocialLinksLink href={link.url} title={link.name} target="_blank" rel="noopener noreferrer">
                <IconWrapper><Icon /></IconWrapper>
              </SocialLinksLink>
            </SocialLinksItem>
          )
        })}
      </SocialLinksList>
    </SocialLinkWrapper>
  );
}

SocialLinks.propTypes = {
  hideStyle: PropTypes.bool.isRequired
}
