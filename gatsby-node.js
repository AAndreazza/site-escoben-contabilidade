// const { graphql } = require("gatsby");
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const posts = await graphql(`
    query MyQuery {
        posts: allContentfulPost(filter: {visivel: {eq: true}}) {
          edges {
            node {
              titulo
              categoria
              slug
              descricao
            }
          }
        }
      }
    `)

    const postTemplate = path.resolve('src/templates/post.js')

    posts.data.posts.edges.forEach(post => {
        createPage({
            path: post.node.slug,
            component: postTemplate,
            context: {
                slug: post.node.slug
            }
        })
    });
}