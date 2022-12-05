import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './TopBarComp'
import Sidebar from './SidebarComp'
import PageOne from '../pages/PageOne'


export default class DefaultPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
            <Row >
                <Col>
                 <Header/>
                </Col>
            </Row>
            <Row>
                <Col md="auto"><Sidebar/></Col>
                <Col md="auto"><PageOne/></Col>
            </Row>
        </Container>
      </div>
    )
  }
}
