import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import Publications from '../components/Publications'

import { Container, Row, Col, Badge } from 'react-bootstrap'


export const PortfolioPageTemplate = (props) => {
  
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
          <Container>
            <Publications/>

          </Container>
      
      </div>
    )
  }
  

  
  const PortfolioPage = () => {

  
    return (
      <Layout>
        <PortfolioPageTemplate
        />
      </Layout>
    )
  }

  export default PortfolioPage
  

