
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import rokImage from '../img/rok.jpg'
// icons
import {FaStar} from 'react-icons/fa'


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
            <hr/>
                
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



