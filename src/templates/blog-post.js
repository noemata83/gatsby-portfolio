import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import './blog-post.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="center mw8 mt4 pv4 ph2-m">
        <h1 className="pb3 bb lh-title">{post.frontmatter.title}</h1>
        <div
          className="fw1 lh-copy pb4 bb"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link to="/blog" className="db mt4 f4 link">
          Return to blog index
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
