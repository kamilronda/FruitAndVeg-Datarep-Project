// imports react to this file
import React from 'react';
// imports axios to this file
import axios from 'axios';
// imports Link which allows to change the URL of the application
import {Link} from 'react-router-dom';
// imports css file from src folder
import '../App.css';
// imports react-bootstrap css components which are used in this file
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// exports FruitandvegProduct which is used in app.js 
export class FruitandvegProduct extends React.Component {
    
    // this constructor allows to delete products
    constructor() {
        super();
        this.DeleteFruitandveg = this.DeleteFruitandveg.bind(this);
    }

    // this methood indicates which exact product is to be deleted by taking the products ID and deleting the matching one
    DeleteFruitandveg(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/api/fruitandveg/'+this.props.fruitandveg._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            // card displays all the information that is on the products page
            // button deletes a specific product by matching it's ID with the ID in the database using the method above
            // link redirects to changeProduct file where the user is able to modify the product entry
                    
                        <Col >
                            <Card>
                                <Card.Header><h4>{this.props.fruitandveg.name}</h4></Card.Header>
                                <img className="mx-auto m-1" variant="top" src={this.props.fruitandveg.image} width="150" height="150"></img>
                                <Card.Body>
                                    <Card.Title>Product Information</Card.Title>
                                    <Card.Text>{this.props.fruitandveg.productInfo}</Card.Text>
                                    <Button variant="danger" onClick={this.DeleteFruitandveg}>Delete</Button>
                                    <Link to={'/changeProduct/'+this.props.fruitandveg._id} className="btn btn-primary ml-3">Edit</Link>
                                </Card.Body>
                                <Card.Footer className="text-muted">Country of Origin: {this.props.fruitandveg.countryOfOrigin}</Card.Footer>
                            </Card>
                        </Col>
                
        );
    }
}  