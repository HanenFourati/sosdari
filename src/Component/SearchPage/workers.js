import React from 'react'
import axios from 'axios'
import Workers from './worker'
import LoaderHOC from './LoaderHOC'
import {Card,CardImage, MDBCardBody,MDBCard,Button } from 'mdbreact';
import './search.css'


const WorkerList =({workers,UserIDone}) => {

   if(workers.length>0){
    return (  
        <div className='filter-workers'>

                {workers.map((el,i)=>
                <Card className="cardstyle">
                <CardImage
                    className="img-fluid"
                    src={el.ImageWorker}
                    waves
                    style={{width:'30%',marginLeft:'29%'}}
                />
                    <Workers   UserIDu={UserIDone} worker={el} key={i}/>
                  
                    </Card>
                        )}
                    


                 </div>
    );
   }

   else{
       console.log('workers.length') 
       return (
        <div className='filter-loader'>
            <MDBCard color="red lighten-1" text="white" className="text-center found" style={{width:'20%',margin:'18% auto'}}>
                <MDBCardBody >
                <h3>Nothing Found</h3>
                </MDBCardBody>
            </MDBCard>
            {/* <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}
        </div>
       )
   }
        
        
    
}
 
export default WorkerList;