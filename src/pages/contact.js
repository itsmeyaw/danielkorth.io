import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Subtitle = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
`

const Link = styled.a`
    margin-right: 25px;
    text-decoration: none;
    display: inline-block;
    position: relative;
    :hover {
        color:#b570cb;
        transform: scale(1.05);
    }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Contacts = styled.div`
    margin: 3rem 1rem;
    text-align: center; 
    font-size: 1.2rem
`

const IndexPage = () => (
    <Layout>
        <SEO title='Contact' />
        <Content>
            <h1 style={{ color: '#86cdf8' }}>Contact</h1>
            <Subtitle>You can find me on...</Subtitle>
            <Contacts>
                <Link href='https://github.com/danielkorth' target='_blank'>Github</Link>
                <Link href='mailto:da.korth@icloud.com' target='_blank'>Mail</Link>
                <Link href='https://kaggle.com/danielkorth' target='_blank'>Kaggle</Link>
                <Link href='https://discord.com/users/151430860149751808' target='_blank'>Discord</Link>
            </Contacts>
        </Content>
    </Layout>
)

export default IndexPage