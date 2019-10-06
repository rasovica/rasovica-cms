import * as React from "react"
import { Layout } from "../components/theme/layout"
import { graphql } from "gatsby"
import { RecipeCard } from "../components/recipeCard"

const Recipes: React.FunctionComponent = ({data}) => {
  return (
    <Layout>
      {
        data.recipes.edges.map(
          item => {
              const {fields, frontmatter} = item.node;

              return <RecipeCard to={fields.slug}
                                 title={frontmatter.title}
                                 image={frontmatter.thumbnail} />
          }
        )
      }
    </Layout>
  )
}

export default Recipes

export const pageQuery = graphql`
    query {
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
                    frontmatter {
                        title
                        thumbnail
                    }
                }
            }
        }
    }
`
