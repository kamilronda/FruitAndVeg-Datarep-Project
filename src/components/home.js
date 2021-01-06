// imports react to this file
import React from 'react';
// imports css file from src folder
import '../App.css';
// imports react-bootstrap css components which are used in this file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
// imports Link which is used to link the button on with the products page
import {Link} from 'react-router-dom';


{var options = { };}
// exports Home which is used in app.js
export class Home extends React.Component{
    render(){
      return (
        <div className="App">
          <div className="container">
            <div className="jumbotron-container">
          <Jumbotron className="home-jumbotron">
            <h1 className="text-white">Check out our wide range of organic fruits and vegetables</h1>
            <h2 className="text-white">Healthy Life - Just Ahead - EcoEats</h2>
            <Link to={'/products'} className="btn btn-success ml-3">View Products</Link>
          </Jumbotron>
          </div>
          </div>
        </div>
      );
    }
  }
  