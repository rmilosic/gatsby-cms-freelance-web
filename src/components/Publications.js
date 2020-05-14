import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, withAssetPrefix } from 'gatsby'

import { Row, Col } from 'react-bootstrap'

// icons

function Publications(props) {
    const { publications } = props.data.markdownRemark.frontmatter

    console.log(publications)
    const pubs = publications.map(pub => {
      return (
        <li className="mb-4">
          <a href={pub.href}>{pub.title}</a>. <i>{pub.authors}. {pub.publisher}. Published in {pub.year}</i>
        </li>
      )
    })

    return (
      <>
        
          <Row>
            <h2>Publications</h2>

          </Row>
          <Row>
            <ul>
              {pubs}
            </ul>  
          </Row>
          
      </>
    )
  }


// PortfolioRoll.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }


Publications.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql` 
          query PublicationsQuery {
            markdownRemark(frontmatter: {templateKey: {eq: "publications"}}) {
              frontmatter {
                publications {
                  title
                  authors
                  year
                  publisher
                  href
                }
              }
            }
            allFile(filter: {sourceInstanceName: {eq: "publications"}}) {
              edges {
                node {
                  publicURL
                }
              }
            }
          }
        `}
    render={(data) => <Publications data={data} />}
  />
)
