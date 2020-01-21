import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import GlobalStyles from '../../styles/GlobalStyles'
import { LayoutMain, LayoutWrapper } from './styles'

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
      <MenuBar />
      <GlobalStyles />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
