import React from 'react'
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const About = styled.p`
    color:black;
`

const AboutHeader = styled.h1`
    color: #4dc4ff
`

const AboutSection = styled.div`
    text-align: center;
    background: darkgreen;
    min-height: 40vh;
    margin: 0 150px;
`

const IndexPage = () => (
    <AboutSection>
        <AboutHeader>About me</AboutHeader>
        <About>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </About>
    </AboutSection>
)

IndexPage.propTypes = {
    name: PropTypes.string
};

export default IndexPage