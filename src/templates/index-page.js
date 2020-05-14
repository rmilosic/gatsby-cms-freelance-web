import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import { Container, Row, Col } from 'react-bootstrap'


// images

export const IndexPageTemplate = () => (
  <div>
    <Row>
      You arrived here early! I am still putting together useful content to fill this page.
    </Row>
    {/* <BlogRoll/> */}
  </div>
)


const IndexPage = () => {

  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  )
}


export default IndexPage
