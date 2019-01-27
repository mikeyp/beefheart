import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "./blog-post.module.scss"


const blogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className='grid-container'>
        <div className='grid-x grid-padding-x align-center'>
          <div className='cell small-8'>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <p>Published on {post.frontmatter.date}</p>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default blogPost

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
