import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import { Container, Row, Col } from 'react-bootstrap'


// icons
import {FaStar} from 'react-icons/fa'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts ? (
          posts.map(({ node: post }) => (
            <div className="my-5" key={post.id}>
              <article className="my-4">
                <header className="pb-3"><h3>{post.frontmatter.title}</h3></header>
                <p className="px">{post.excerpt}</p> <Link className="text-secondary" to={post.fields.slug}>Preberi več</Link>
                {/* <Link to={post.fields.slug} className="btn btn-primary">Go somewhere</Link> */}
                <hr/>
                <Row>
                  <Col>
                    <span><small className="font-weight-bold">{post.frontmatter.date}</small></span>
                  </Col>
                </Row>
                
                {/* TODO: implement db serverless methds */}
                {/* <Row>
                  {/* <Col>
                    <FaStar className="text-secondary"/>
                  </Col>
                </Row> */}
              </article>

              
            </div>
          ))
        ) : "Expect to read from me soon. I am busy writing right now "}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 600)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD MMMM, YYYY", locale: "sl")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
