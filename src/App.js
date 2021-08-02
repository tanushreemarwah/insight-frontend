import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Insight from "./components/insight";
import Introduction from "./pages/introduction";
import Calendar from "./pages/calendar";
import Notes from "./pages/notes";
import { Navbar, Nav, NavLink, Breadcrumb } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/header.scss';
import { Login } from "./pages/Login";

class App extends Component {
  render () {
    return (
      <Router>
        <div className='header'>
          <Navbar expand='lg' bg='light' className='header-navbar'>
            <Navbar.Brand href="#">Insight</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='mr-auto'>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/login">Profile</NavLink>
                <NavLink href="/introduction">Introduction</NavLink>
                <NavLink href="/calendar">Calendar</NavLink>
                <NavLink href="/notes">Notes</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br/>
          <Route path="/" exact component={Insight} />
          <Route path="/login" exact component={Login} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/notes" component={Notes} />
        </div>
        <div className='footer'>
          <Breadcrumb>
            {/* TODO */}
          </Breadcrumb>
        </div>
      </Router>
    );
  }
}

export default App;
