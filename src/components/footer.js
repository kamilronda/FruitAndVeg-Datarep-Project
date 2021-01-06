// imports react to this file
import React from 'react';
// imports css file from src folder
import '../App.css';
// imports react-bootstrap css components which are used in this file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

// exports Footer which is used in app.js
export class Footer extends React.Component{
    render(){
      return (
        <footer>
            <Navbar bg="success" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="ml-5 mr-5">
                        <h5 className="ml-2">EcoEats</h5>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/addProduct">Add Product</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="mr-5 mt-5">
                    <div className="footer-bottom">
                        <p className="text-center">
                             &copy;{new Date().getFullYear()} EcoEats - College Project | Kamil Ronda - G00359320
                         </p>
                     </div>  
                    </Col>
                </Row>
                </Container>
                </Navbar.Collapse>
            </Navbar>
        </footer>
      );
    }
  }
