import React from 'react'

import links from './content'
import { MenuLinksWrapper, MenuLinksList, MenuLinksItem, MenuLinksLink } from './styles';
import getThemeColor from "../../utils/getThemeColor"

export default function MenuLinks() {

  return (
    <MenuLinksWrapper>
      <MenuLinksList>
        {links.map((link, i) => (
          <MenuLinksItem key={i}>
            <MenuLinksLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </MenuLinksLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </MenuLinksWrapper>
  )
}
