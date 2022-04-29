import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestPage0 from './TestPage0';
import TestPage1 from './TestPage1';

export default function NavBarComp() {
  return (
    <Router>
    <div>
      <Navbar bg="light" variant="light">
        <Container>
            <Nav className="me-auto">
            <Nav.Link as={Link} to={"/TestPage0"}>TestPage0</Nav.Link>
            <Nav.Link as={Link} to={"/TestPage1"}>TestPage1</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/TestPage0">
            <TestPage0 />
          </Route>
          <Route path="/TestPage0">
            <TestPage1 />
          </Route>
        </Switch>
    </div>
    </Router>
  )
}
