import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import { Row, Col, Badge } from 'react-bootstrap'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    
    <section className="pb-5 pt-5">
      {helmet || ''}
    
      <div>
        <Row>
          <Col>
            <h1>
              {title}
            </h1>
          </Col>          
        </Row>
        
        {tags && tags.length ? (
        <div>
          <Row>
            {/* Tags */}
            <Col>
              <span><small className="font-weight-bold">{date}</small></span>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                {tags.map(tag => (
                  <Badge className="mx-1" variant="primary" key={tag + `tag`}>
                    <Link className="text-white" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        ) : null}
        <hr/>
        <p>{description}</p>
        <PostContent content={content} />
        
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY", locale: "sl")
        title
        description
        tags
      }
    }
  }
`
