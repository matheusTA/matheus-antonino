import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutMe from '../components/AboutMe'

const IndexPage = () => (
  <Layout>
    <SEO title="Sobre Mim" />
    <AboutMe />
  </Layout>
)

export default IndexPage
