import React from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
// import Sidebar from 'react-bootstrap-sidebar';
import { NavLink } from 'react-router-dom';

const SidebarComp = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <Button bsStyle="primary" onClick={ () => this.updateModal(true) }></Button>
      {/* <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
        <Nav>
          <NavItem href="#">Link 1</NavItem>
          <NavItem href="#">Link 2</NavItem>
          <NavItem href="#">Link 3</NavItem>
          <NavItem href="#">Link 4</NavItem>
        </Nav>
      </Sidebar> */}
    </div>
  );
};

export default SidebarComp;

