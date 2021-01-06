// imports react to this file
import React from 'react';
// imports css file from src folder
import '../App.css';
// imports fruitandveg file which is responsible for displaying the react-bootstrap cards with entries from the database
import { Fruitandveg } from './fruitandveg';
// imports axios
import axios from 'axios';
// imports react-bootstrap css components which are used in this file
import { Jumbotron } from 'react-bootstrap';

// exports Products which is used in app.js
export class Products extends React.Component{

  // this constructor is responsible for refreshing the page to see any changed entries
  constructor(){
    super();
    this.ReloadData = this.ReloadData.bind(this);
  }

  // state fruitandveg has all the information in JSON format that is used by fruitandvegProduct file to be displayed on the products page
    state = {
      fruitandveg: []
    };

    // reloads the data so we can get newly added entries
    ReloadData(){
      axios.get('http://localhost:4000/api/fruitandveg')
      .then((response)=>{
          this.setState({fruitandveg: response.data})
        }
      )
      // if error occurs, then the error is caught and displayed in readable format
      .catch((error)=>{
        console.log(error)
      }
      );
    }

    // takes data in from the database
    componentDidMount(){
      axios.get('http://localhost:4000/api/fruitandveg')
      .then((response)=>{
          this.setState({fruitandveg: response.data})
        }
      )
      // if error occurs, then the error is caught and displayed in readable format
      .catch((error)=>{
        console.log(error)
      }
      );
    }

    render(){
      return (
        <div className="App">
            <div className="container">
            <div className="jumbotron-container">
          <Jumbotron className="products-jumbotron">
            <h1 className="text-white">Check out our wide range of organic fruits and vegetables - EcoEats</h1>
          </Jumbotron>
          </div>
          </div>
            <Fruitandveg fruitandveg={this.state.fruitandveg} ReloadData={this.ReloadData}></Fruitandveg>
        </div>
      );
    }
  }