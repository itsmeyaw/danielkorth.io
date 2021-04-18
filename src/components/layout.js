/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  // background: darkblue;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  min-height:100%;
  padding: 0 1.0875rem 0;
  // padding-top: 0;
  // background: darkblue;
`

const Footer = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  height: 2.5rem;
  // display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  // background: #fff;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            <main>{children}</main>
          </Content>
          <Footer>
              <p>
                © {new Date().getFullYear()} |  Daniel Korth   -   Icons by <a href="https://icons8.com/">Icons8</a>
            </p>
            </Footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
