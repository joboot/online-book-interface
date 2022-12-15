import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>

      <h1 align='center'>Welcome to Programming for Dumb Dumb's</h1>
      <h1 align='center'>Table of Contents</h1>
      <p align='center'>Programming for Dumb Dumb's Table of Contents</p>

      <Container>
      <Table striped bordered hover> 

        <thead>
          <tr>
            <th>Chapter</th>
            <th>Page Number</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={`/chapter1p1/`}>Page 1</Link></td>
          </tr>

          <tr>
            <td></td>
            <td><Link to={`/chapter1p2/`}>Page 2</Link></td>
          </tr>

          <tr>
            <td>2</td>
            <td><Link to={`/chapter2p1/`}>Page 1</Link></td>
          </tr>

          <tr>
            <td></td>
            <td><Link to={`/chapter2p2/`}>Page 1</Link></td>
          </tr>
        </tbody>
      
      </Table>
      </Container>

      </div>

    )
  }
}
