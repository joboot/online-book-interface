import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Header from './TopBarComp'
import Sidebar from './SidebarComp'
import Footer from './FooterComp';

const DefaultPage = ({Page}) => {
  return (
    <div className='defaultPage'>
      <Container fluid>
          <Row >
            <Sidebar/>
          </Row>
          <Row className='pageContent'>
            <Col xs={2}></Col>
            <Col xs={8}>{Page}</Col>
          </Row>
          <Row className='footer'>
            <Footer /> 
          </Row>
      </Container>
    </div>
  )
}
export default DefaultPage;