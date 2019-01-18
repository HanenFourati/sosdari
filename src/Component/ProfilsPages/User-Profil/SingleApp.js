import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import '../../css/Appoinetement.css'
const SingleApp = (props) => {
    const { Single = {}} = props
    const {
        _id= 'none',
        WorkerID= 'none',  
        UserID= 'none', 
        Date= 'none',
         Time='none',
    } =  Single
   
        return (
          <div className="appoinstyle">
         
         Worker ID: {WorkerID}  <br/> 
         User ID: {UserID }  <br/> 
         Date: {Date}  <br/> 
         Time: {Time }  <br/> 
         <hr/>
        </div>);
     
    }

export default SingleApp;
