import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import { Container, Row, Col } from 'react-bootstrap'


// images

export const IndexPageTemplate = () => (
  <div>
    <BlogRoll/>
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
