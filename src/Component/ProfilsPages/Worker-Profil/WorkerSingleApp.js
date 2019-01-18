import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

const WorkerSingleApp = (props) => {
    const { Single = {}} = props
    const {
        _id= 'none',
        WorkerID= 'none',  
        UserID= 'none', 
        Date= 'none',
         Time='none',
    } =  Single
   
        return  (
            <div className="appoinstyle">  
         <div>
          
         Worker ID: {WorkerID} <br/> 
         User ID: {UserID }  <br/> 
         Date: {Date}  <br/> 
         Time: {Time }  <br/> 
         <hr/>
        </div> </div> );
     
    }

export default WorkerSingleApp;
