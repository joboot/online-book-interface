import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Header from './TopBarComp'
import Sidebar from './SidebarComp'
import PageOne from '../pages/PageOne'
import SignIn from '../pages/SignIn'

const DefaultPage = ({Page}) => {
  return (
    <div>
      <Container fluid>
          <Row >
              <Col>
              {/* <Header/> */}
              </Col>
          </Row>
          <Row>
              {/* <Col md="auto"><Sidebar/></Col>
              <Col md="auto"><PageOne/></Col> */}
              {/* <Col md="auto"><SignIn/></Col> */}
              <Col md="auto">{Page}</Col>
          </Row>
      </Container>
    </div>
  )
}
export default DefaultPage;