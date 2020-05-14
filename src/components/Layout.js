import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LeftNav from '../components/LeftNav'
import './app.scss'


import { Container, Row, Col } from 'react-bootstrap'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {/* <Navbar /> */}
      <Container fluid>
        <Row>
          {/* side tab */}

          <Col sm={0} md={3} lg={2}>
            <LeftNav/>
          </Col>
          
          
          
          <Col className="bg-white pt-5 min-vh-100">
            {/* blogroll */}
            <Row>
              <Col xs={10} lg={{span: 8, offset: 1}}>
                {/* <BlogRoll/>  */}
                <div>{children}</div>
              </Col>
            </Row>

            
                         
          </Col>
        

        </Row>
      </Container>

      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
