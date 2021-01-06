// imports react to this file
import React from 'react';
// imports css file from src folder
import './App.css';
// imports all the files which were exported in components folder
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { AddProduct } from './components/addProduct';
import { Products } from './components/products';
import { ChangeProduct } from './components/changeProduct';
// imports react-bootstrap css components which are used in this file
import 'bootstrap/dist/css/bootstrap.min.css';
// imports BrowserRouter, Switch and Route which allows to take and display the components from the components folder 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


  class App extends React.Component {
    render(){
    return (
      <Router>
        <Header></Header>
      <div className="App">
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/addProduct' component={AddProduct}></Route>
          <Route path='/changeProduct/:id' component={ChangeProduct}></Route>
        </Switch>
      </div>
      <Footer></Footer>
      </Router>
    );
  }
}

export default App;