import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Python from "../images/python.svg"

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
    // width: 100%;
    display: flex;
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
            </SkillsSection>
            <SkillElement>
                <Python />
                Python
            </SkillElement>
        </Skills>
    </SkillsContainer>
)

SkillsPage.propTypes = {
    name: PropTypes.string
};

export default SkillsPage