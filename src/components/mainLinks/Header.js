import React from "react";
import {Nav,Navbar,Container,Col,Row} from 'react-bootstrap'
import {Outlet,Link,NavLink} from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Staticbar from "./staticBar";
import style from '../css/style.module.css'


function Header() {
  return (
    <React.Fragment>
   <Navbar bg="light" expand="lg">
  <Container fluid>
    <Link className="navbar-brand"  to="/" >Shahmali Mustafayev</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink  to="About" className={style.navlink}>About</NavLink>
        <NavLink to="Resume" className={style.navlink}>Resume</NavLink>
        <NavLink to="Project" className={style.navlink}>Projects</NavLink>
        <NavLink to="Stats" className={style.navlink}>Stats</NavLink>
        <NavLink to="Contact" className={style.navlink}>Contact</NavLink>
{/* isActive is not working but I do not reason therefore I used css pseude code */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container className="mt-5" fluid>
  <Row>
    <Col sm={4}><Staticbar/></Col>
    <Col sm={8}>
      <Box>
        <Paper elevation={3}><Outlet/></Paper>
      </Box>
    </Col>
  </Row>
  
</Container>
    </React.Fragment>
  );
}

export default Header;