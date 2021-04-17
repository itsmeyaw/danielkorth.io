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
    margin-top: 3vh
`

const SkillsSection = styled.ul`
    font-weight: bold;
    margin: 0 auto;
`

const SkillElement = styled.li`
    color:#a5acb9;
    font-weight: normal;
    margin: auto;
    display: flex;
    items-align: center;
`


const Header = styled.h1`
    color: #4dc4ff;
    text-align: center;
    background-color: #404859;
    border-radius: 0.3em;
    width: max-content;
    margin: 10px auto;
    padding: 2px 5px
`

const SkillsContainer = styled.div`
    text-align: justify;
    // background: darkgreen;
    min-height: 40vh;
    margin: 0 120px;
`

const SkillsPage = () => (
    <SkillsContainer>
        <Header>
            Skills
        </Header>
        <Skills>
            <SkillsSection>
                Languages
                <SkillElement>
                    <Python />
                    <Java />
                    <R />
                    <HTML />
                    <CSS />
                    <Postgres />
                    {/* <p>Python</p> */}
                </SkillElement>
            </SkillsSection>
        </Skills>
    </SkillsContainer>
)

SkillsPage.propTypes = {
    name: PropTypes.string
};

export default SkillsPage