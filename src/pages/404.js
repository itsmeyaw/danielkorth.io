import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = styled.h1`
  color: #4dc4ff;
`

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <OuterContainer>
        <Container>
          <NotFound>404 Not Found</NotFound>
          <Description>lol</Description>
        </Container>
      </OuterContainer>
  </Layout>
)

export default NotFoundPage
