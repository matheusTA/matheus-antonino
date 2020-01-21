import React from 'react';
import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"

import { MenuBarGroup, MenuBarItem, MenuBarLink, MenuBarWrapper } from './styles'

export default function MenuBar() {
  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para Home">
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search" title="Pesquisar">
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>


      <MenuBarGroup>
        <MenuBarItem title="Mudar o tema">
          <Light />
        </MenuBarItem>
        <MenuBarItem title="Mudar o visualizaçao">
          <Grid />
        </MenuBarItem>
        <MenuBarItem title="Ir para o topo">
          <Arrow />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
}
