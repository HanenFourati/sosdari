import React, { Component } from 'react';
import './App.css';
import SOSDariRouter from './Component/SOSDariRouter.js';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter> 
       <SOSDariRouter/>
       </BrowserRouter>    
      </div>
    );
  }
}

export default App;
