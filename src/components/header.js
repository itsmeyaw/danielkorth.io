import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  color: #a5acb9;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  :hover {
    color: #de73ff;
    transform: scale(1.05);
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
  color: #a5acb9;
  :hover {
    color:#de73ff;
    transform: scale(1.05);
  }
`
const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">{siteTitle}</HomeLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
