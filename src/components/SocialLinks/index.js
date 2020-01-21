import React from 'react';

import Icons from './Icons'
import links from './content'
import { SocialLinkWrapper, SocialLinksList, SocialLinksItem, SocialLinksLink, IconWrapper } from './styles';

export default function SocialLinks() {
  return (
    <SocialLinkWrapper>
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
