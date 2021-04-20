import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Link } from 'react-scroll';
import Arrow from '../images/arrow.svg'

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-direction: row;
  height: 80vh;
  // padding-bottom: 10vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
  color: #4dc4ff;
`

const ArrowLink = styled.div`
  // background-color: green;
  text-align: center;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <div>
        <OuterContainer>
          <Container>
            <NameHeader>{data.site.siteMetadata.title}</NameHeader>
            <Description>{data.site.siteMetadata.subtitle}</Description>
          </Container>
        </OuterContainer>
          <ArrowLink>
            <Link to="about" smooth duration={1200}>
              <Arrow />
            </Link>
          </ArrowLink>
      </div>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
