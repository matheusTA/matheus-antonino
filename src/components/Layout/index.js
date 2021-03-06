import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link";

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import GlobalStyles from '../../styles/GlobalStyles'
import { LayoutMain, LayoutWrapper } from './styles'

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <LayoutMain>{children}</LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
      <GlobalStyles />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
