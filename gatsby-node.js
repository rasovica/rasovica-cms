const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: `/${node.frontmatter.type}${slug}`,
    });
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`src/templates/recipe.tsx`)

  const result = await graphql(`
    {
      recipes: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: {
            type: {
            eq: "recipe"
          }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.recipes.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: recipeTemplate,
      context: {},
    })
  })
}
