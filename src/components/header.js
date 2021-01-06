// imports react to this file
import React from 'react';
// imports css file from src folder
import '../App.css';
// imports react-bootstrap css components which are used in this file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

//exports Header which is used in app.js
export class Header extends React.Component{
    render(){
      return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="light">
                <Navbar.Brand href="/">EcoEats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/addProduct">Add Product</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* displays the time on the right of the navbar */}
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    {new Date().toLocaleTimeString()}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </header>
      );
    }
  }