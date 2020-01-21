import React from 'react';

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'
import { SidebarWrapper } from './styles';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </SidebarWrapper>
  );
}
