import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "./blog-post.module.scss"


const blogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <p>Published on {post.frontmatter.date}</p>
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.html }}></div>

    </Layout>
  )
}

export default blogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
