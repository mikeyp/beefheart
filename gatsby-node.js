/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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
            }
          }
        }
      }
    }
    `;

    if (process.env.NODE_ENV === 'production') {
      var query = `{
        blogs: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { glob: "**/src/blog/*.md" }
            frontmatter: {published: {eq: true}}
          }
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
        `;

      }


      return new Promise((resolve, reject) => {
        graphql(query).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          result.data.blogs.edges.forEach(({ node}) => {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve('src/templates/blog-post.js')
            })
          })
          resolve()
        })
      })
    }
