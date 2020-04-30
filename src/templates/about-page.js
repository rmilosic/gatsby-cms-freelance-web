import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import { Container, Row, Col, Button } from 'react-bootstrap'

// images
import rokImage from '../img/rok.jpg'
import docImage from '../img/planning.svg'
import computerImage from '../img/computer.svg'
import serverImage from '../img/server.svg'
import daImage from '../img/data-analytics.svg'


export const AboutPageTemplate = ({ 
  title,
  name,
  role,
  leadDescription,
  offerings 
 }) => {

  // const Offerings = offerings.map((offering) => {
  //   return (
  //     <Col xs={12} md={6} lg={3}>
  //       {/* <img className="img-fluid mw-50px my-2"/> */}
  //       <h4 className="font-weight-bold">{offering.heading}</h4>
  //       <p>{offering.text}</p>
  //     </Col>
  //   )
  // })

  return (
    <div>
    <section >
      <Container>
        {/* Image */}
        <Row className="justify-content-center">
          {/* introduction */}
          <Col xs={12} md={6}>
            <Row>
              <Col>
                <h1 className="text-primary">
                  {name}
                </h1>
                <h2 className="text-dark">
                  {role}
                </h2> 
                <p className="lead text-dark font-weight-light">
                  {leadDescription}
                </p>
              </Col>
            </Row>              
            <Row>
              <Col>
              <Link to="/portfolio">
                <Button className="mx-4" variant="secondary" size="lg">
                  <strong>Portfolio</strong>
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="primary" size="lg">
                  <strong>Življenjepis</strong>
                </Button>
              </Link>
              </Col>
            </Row>
          </Col>

          <Col xs={0} md={4}>
            <img src={rokImage} alt="Rok Milošič" className="img-fluid rounded"/>
          </Col>
          
        </Row>
      </Container>
    </section>

    <section className="bg-white">
      
      <Container>
        <Row>
          {/* <Offerings/> */}
        </Row>
      </Container>
    </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  leadDescription: PropTypes.string,
  offerings: PropTypes.array
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        offerings={frontmatter.offerings}
        leadDescription={frontmatter.leadDescription}
        role={frontmatter.role}
        name={frontmatter.name}

      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }), 
}
export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage{
    markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
      frontmatter {
        leadDescription
        offerings {
          heading
          image {
            relativePath
          }
          text
        }
        role
        name
        title
      }
    }
  }
`
