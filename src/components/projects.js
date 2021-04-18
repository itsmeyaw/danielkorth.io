import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ProjectHeader = styled.h1`
    color: #4dc4ff;
    text-align: center;
    background-color: #404859;
    border-radius: 0.3em;
    width: max-content;
    margin: 70px auto 30px;
    padding: 2px 5px;
`

const Kaggle = styled.ul`
    // font-weight: bold;
    margin-left: 0;
`

const KaggleItems = styled.li`
    margin-top: .7em;
    margin-left: 2em;
    front-weight: normal;
    :hover {
        color:#de73ff;
    }
`
const Link = styled.a`
    // text-decoration: none;
    :hover {
        color:#de73ff;
    }
`


const ProjectSection = styled.div`
    text-align: justify;
    min-height: 40vh;
    margin: 0 120px;
`

const ProjectPage = () => (
    <ProjectSection>
        <ProjectHeader>
            Projects
        </ProjectHeader>
        <Kaggle>Most of my Projects are in the form of Jupyter Notebooks and can be found on Kaggle:
            <KaggleItems>
                <Link href='https://www.kaggle.com/danielkorth/eda-world-happiness-report-2021-plotly' target='_blank'>Analysis of the World Happiness Report 2021 (Plotly)</Link>
            </KaggleItems>
            <KaggleItems>
                <Link href='https://www.kaggle.com/danielkorth/netflix-eda-and-data-visualization-plotly' target='_blank'>Analysis of Netflix Content (Plotly)</Link>
            </KaggleItems>
            <KaggleItems>
                <Link href='https://www.kaggle.com/danielkorth/eda-amazon-bestselling-books' target='_blank'>Analysis Amazon Bestsellers (Matplotlib/Seaborn)</Link>
            </KaggleItems>
            <KaggleItems>
                <Link href='https://www.kaggle.com/danielkorth/prediction-hr-analytics-data-scientists' target='_blank'>Prediction of job change of Data Scientists (Random Forest, SVM, XGBoost)</Link>
            </KaggleItems>
        </Kaggle>
    </ProjectSection>
)

ProjectPage.propTypes = {
    name: PropTypes.string
};

export default ProjectPage