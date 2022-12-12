import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Header from './TopBarComp'
import Sidebar from './SidebarComp'
import Footer from './FooterComp';

const DefaultPage = ({Page}) => {
  return (
    <div>
      <Container fluid>
          <Row >
            <Sidebar/>
          </Row>
          <Row className='pageContent'>
            {Page}
          </Row>
          <Row className='footer'>
            <Footer /> 
          </Row>
      </Container>
    </div>
  )
}
export default DefaultPage;