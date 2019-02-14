/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  var query = `{
    blogs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "**/src/blog/*.md" }
      }
      ) {
        edges {
          node {
            frontmatter {
              path
              redirect_from
            }
          }
        }
      }
    pages: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "**/src/pages/*.md" }
      }
      ) {
        edges {
          node {
            frontmatter {
              path
              redirect_from
            }
          }
        }
      }
    }
  `;

  return new Promise((resolve, reject) => {
    graphql(query).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.blogs.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve('src/templates/blog-post.js')
        })

        node.frontmatter.redirect_from.forEach((redirect) => {
          createRedirect({
            fromPath: redirect,
            toPath: node.frontmatter.path,
            redirectInBrowser: true
          })
        })
      })
      result.data.pages.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve('src/templates/page.js')
        })

        node.frontmatter.redirect_from.forEach((redirect) => {
          createRedirect({
            fromPath: redirect,
            toPath: node.frontmatter.path,
            redirectInBrowser: true
          })
        })
      })
      resolve()
    })
  })
}
