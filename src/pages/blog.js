import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "katex/dist/katex.min.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  height: 80%;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #696f79;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  :hover {
    color:#f0a45d;
  }
`
// Maybe use later on
// const ReadingTime = styled.h5`
//   display: inline;
// `


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1 style={{color:'#4dc4ff'}}>Blog</h1>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
              </Link>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
                {/* <ReadingTime> - {node.fields.readingTime.text}</ReadingTime> */}
              </div>
              <p>{node.excerpt}</p>
            </div>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
