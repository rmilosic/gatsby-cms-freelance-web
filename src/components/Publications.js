import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, withAssetPrefix } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import { Container, Row, Col } from 'react-bootstrap'

// icons
import {FaStar} from 'react-icons/fa'

function Publications(props) {
    const { publications } = props.data.markdownRemark.frontmatter

    console.log(publications)
    const pubs = publications.map(pub => {
      return (
        <li>
          <a href={ withAssetPrefix("/publications/CHEAP-OR-TIMELY-DRUG.pdf")}>{pub.title}</a>
          {pub.authors}
        </li>
      )
    })

    return (
      <>
        
          <Row>
            <h1>Publications</h1>

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
            markdownRemark(frontmatter: { templateKey: { eq: "publications" } }) {
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
          }
        `}
    render={(data) => <Publications data={data} />}
  />
)
