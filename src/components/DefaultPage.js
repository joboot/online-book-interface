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
            <Sidebar/>
          </Row>
          <Row>
            {Page}
          </Row>
      </Container>
    </div>
  )
}
export default DefaultPage;