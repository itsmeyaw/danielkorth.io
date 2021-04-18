import React from 'react'
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const About = styled.p`
    color:#a5acb9;
`

const AboutHeader = styled.h1`
    color: #4dc4ff;
    text-align: center;
    background-color: #404859;
    border-radius: 0.3em;
    width: max-content;
    margin: 70px auto 30px;
    padding: 2px 5px;
`
 
const AboutSection = styled.div`
    text-align: justify;
    // min-height: 40vh;
    margin: 0 120px;
`

const IndexPage = () => (
    <AboutSection>
        <AboutHeader>About me</AboutHeader>
        <About>
            I am 20 years old and currently studying Information Systems at the Technical University of Munich. My interests are in exploring how data can be used to gain meaningful insights and make better/more rational decisions. I am currently focusing my attention to Kaggle - mainly Exploratory Data Analysis & Competitions - and learning about the methods and techniques used for Deep Metric Learning.
        </About>
    </AboutSection>
)

IndexPage.propTypes = {
    name: PropTypes.string
};

export default IndexPage