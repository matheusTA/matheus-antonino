import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from '../components/Search'

const searchPage = () => (
  <Layout>
    <SEO title="Pesquisar" />
    <Search />
  </Layout>
)

export default searchPage
