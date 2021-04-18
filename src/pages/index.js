import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/skills"
import Project from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <About />
    <Skills />
    <Project />
  </Layout>
)

export default IndexPage
