// imports react to this file
import React from 'react';
// imports css file from src folder
import '../App.css';
// imports react-bootstrap css components which are used in this file
import { FruitandvegProduct } from './fruitandvegProduct';
import { Row, Col } from 'react-bootstrap';

// exports Fruitandveg which is used in app.js
// also reloads the page so we can see the efects of deletion straight away
export class Fruitandveg extends React.Component{
    render(){
      return (
        <div className="container">
          {/* displays each of the database entries in react-bootstrap cards on the products page */}
          <Row>
            {this.props.fruitandveg.map((fruitandveg) => (
                <Col className="mb-3" xs={12} sm={6} lg={4} key={fruitandveg._id}>
                    <FruitandvegProduct fruitandveg={fruitandveg} ReloadData={this.props.ReloadData} />
                </Col>
            ))}
          </Row>
        </div>
      )
    }
}
