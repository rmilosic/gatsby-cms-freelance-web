
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Row, Col, Nav } from 'react-bootstrap'
import rokImage from '../img/rok.jpg'
// icons
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

// {/* TODO: add most voted posts */}


const LeftNav = ({
    personalBit
}) => {


    return (
        <div>
            <Row>
                <Col className="px-5 pt-5 pb-2">
                <img src={rokImage} alt="Rok Milošič" className="img-fluid rounded-circle"/>
                </Col>
                </Row>
                <Row className="text-center">
                <Col><strong>Rok Milošič</strong></Col>
                </Row>
                <Row className="text-center">
                <p className="px-2">
                <small>{personalBit}</small> <br/>
                {/* TODO: add about page */}
                {/* <Link to="/about">več o meni</Link> */}
                </p>

            </Row>
            <Row className="text-center justify-content-center">
                <Col >
                    <a className="d-inline-block" href="https://github.com/rmilosic"><AiFillGithub className="mx-1"/></a>
                    <a className="d-inline-block" href="mailto:rok.milosic@gmail.com"><MdEmail className="mx-1"/></a>
                    <a className="d-inline-block" href="https://www.linkedin.com/in/rok-milosic/"><FaLinkedin className="mx-1"/></a>
                </Col>
            </Row>
            <hr/>
            
            <Row>
                <Col>
                    
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/">
                                Writing
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/publications">
                                Publications
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>                    
                    
                </Col>
                
            </Row>
        </div>
)}


LeftNav.propTypes = {
    personalBit: PropTypes.string
}



export default () => (
  <StaticQuery
    query={graphql`
        query LeftNavQuery {
            markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
                frontmatter {
                    title
                    description
                    personalBit
                }
            }
        }`}
    render={(data) => <LeftNav personalBit={data.markdownRemark.frontmatter.personalBit}/>}
  />
)



