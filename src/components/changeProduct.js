// imports react to this file
import React from 'react';
// imports axios to this file
import axios from 'axios';
// imports css file from src folder
import '../App.css';

// exports ChangeProduct which is used in app.js
export class ChangeProduct extends React.Component{

    constructor(){
      super();

      // these properties bind methods to their events
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeCountryOfOrigin = this.onChangeCountryOfOrigin.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangeProductInfo = this.onChangeProductInfo.bind(this);

      this.state ={
        Name: '',
        CountryOfOrigin: '',
        Image: '',
        ProductInfo: ''
      }
    }

    // this runs when the component is active in the view 
    componentDidMount(){
        console.log("load "+this.props.match.params.id);

        // updates the data using products id
        axios.get('http://localhost:4000/api/fruitandveg/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            _id:response.data._id,
            Name:response.data.name,
            CountryOfOrigin:response.data.countryOfOrigin,
            Image:response.data.image,
            ProductInfo:response.data.productInfo
          })
        })
        // if error occurs, then the error is caught and displayed in readable format
        .catch((error)=>{
          console.log(error);
        });
    }

  // methods
    onChangeName(e){
      this.setState({
        Name: e.target.value
      });
    }

    onChangeCountryOfOrigin(e){
      this.setState({
        CountryOfOrigin: e.target.value
      });
    }

    onChangeImage(e){
      this.setState({
        Image: e.target.value
      });
    }

    onChangeProductInfo(e){
        this.setState({
          ProductInfo: e.target.value
        });
      }

    onSubmit(e){
      e.preventDefault();
      alert("Product: " + this.state.Name + " " + this.state.CountryOfOrigin + " " + this.state.Image + " " + this.state.ProductInfo);

      // objects
      const newFruitandveg = {
        name: this.state.Name,
        countryOfOrigin: this.state.CountryOfOrigin,
        image: this.state.Image,
        productInfo: this.state.ProductInfo,
        _id:this.state._id
      }

      // takes the updated product entry from the database
      axios.put('http://localhost:4000/api/fruitandveg/'+this.state._id, newFruitandveg)
      .then(res =>{
        console.log(res.data)
      })
      .catch();
    }


    // form which allows user to change the products details 
    render(){
      return (
        <div className="App">
          <div className="container mt-5 mb-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group mb-4">
                <label>New Products Name: </label>
                <input type='text' className='form-control' value={this.state.Name} onChange={this.onChangeName}></input>
              </div>
              <div className="form-group mb-4">
                <label>New Products Information: </label>
                <input type="text" className='form-control' value={this.state.ProductInfo} onChange={this.onChangeProductInfo}></input>
              </div>
              <div className="form-group mb-4">
                <label>New Products CountryOfOrigin: </label>
                <input type="text" className='form-control' value={this.state.CountryOfOrigin} onChange={this.onChangeCountryOfOrigin}></input>
              </div>
              <div className="form-group mb-4">
                <label>New Products Image: </label>
                <textarea type='text' className='form-control' value={this.state.Image} onChange={this.onChangeImage}></textarea>
              </div>
              <div className="form-group mb-4">
                <input type='submit' value='Edit Product' className='btn btn-primary'></input>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }