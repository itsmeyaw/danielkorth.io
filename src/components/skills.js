import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Python from "../images/python.svg"
import Java from "../images/java.svg"
import R from "../images/r-project.svg"
import Postgres from "../images/postgresql.svg"
import HTML from "../images/html-5.svg"
import CSS from "../images/css3.svg"

const Skills = styled.div`
    color:#a5acb9;
    margin: 0 auto;
    margin-top: 3vh;
    font-weight: bold;
`

const SkillsSection = styled.div`
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: 0;
    font-weight: normal;
`

const SkillElement = styled.div`
    color:#a5acb9;
    margin-top: 10px;
    font-weight: normal;
    margin-right: 50px;
    text-align: center;
`
const Proficient = styled.p`
    text-decoration: underline;
    text-decoration-color: #8db472;
`

const PriorExp = styled.p`
    text-decoration: underline;
    text-decoration-color: #e3bf7a;
`
const Header = styled.h1`
    color: #4dc4ff;
    text-align: center;
    background-color: #404859;
    border-radius: 0.3em;
    width: max-content;
    margin: 70px auto 30px;
    padding: 2px 5px;
`

const SkillsContainer = styled.div`
    text-align: justify;
    // background: darkgreen;
    margin: 0 120px;
`

const SkillsPage = () => (
    <SkillsContainer>
        <Header>
            Skills
        </Header>
        <Skills>
            Languages
            <SkillsSection>
                <SkillElement>
                    <Python />
                    <Proficient>Python</Proficient>
                </SkillElement>
                <SkillElement>
                    <Java />
                    <Proficient>Java</Proficient>
                </SkillElement>
                <SkillElement>
                    <Postgres />
                    <Proficient>(postgre)SQL</Proficient>
                </SkillElement>
                <SkillElement>
                    <R />
                    <PriorExp>R</PriorExp>
                </SkillElement>
                <SkillElement>
                    <HTML /><CSS />
                    <PriorExp>HTML/CSS</PriorExp>
                </SkillElement>
            </SkillsSection>
            Libraries
            <SkillsSection>
                <p>NumPy, pandas, Matplotlib, Seaborn, Plotly, sklearn, PyTorch</p>
            </SkillsSection>
            Frameworks
            <SkillsSection>
                <p>Spring Boot, Gatsby</p>
            </SkillsSection>
            Development tools
            <SkillsSection>
                <p>Git, VSCode, IntelliJ</p>
            </SkillsSection>
        </Skills>
    </SkillsContainer>
)

SkillsPage.propTypes = {
    name: PropTypes.string
};

export default SkillsPage