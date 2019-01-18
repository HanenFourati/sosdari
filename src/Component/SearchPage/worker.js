import React from 'react'
import {  CardBody, CardTitle, CardText,MDBProgress,MDBBtn,Button   } from 'mdbreact';

import MakeAppointement from './MakeAppointement.js'
import ConsultReviews from './ConsultReview.js'
const Workers = ({worker,UserIDu}) => {
    return ( 
        <React.Fragment>
                <CardBody style={{textAlign:'center',lineHeight:'1.8'}}>
                    <CardTitle>{worker.FirstNameWorker + ' ' + worker.LastNameWorker}</CardTitle>
                    <CardText style={{color:'#8bc34a',fontSize:'18px',}}>
                            {worker.JobWorker}
                         </CardText>
                    <CardText>
                    {worker.AdresseWorker}
                    </CardText>
                    <span>Commitement Rating</span>  
                        <MDBProgress material value={worker.CommitementRating} height="15px" color="warning">
                         {worker.CommitementRating+'%'}
                        </MDBProgress>
                        <p>Quality Rating</p>
                        <MDBProgress material value={worker.QualityRating} height="15px" color="success" padding="2px 0">
                        {worker.QualityRating+'%'}
                        </MDBProgress>
                        {/* <CardText style={{color:'red',fontSize:'18px',}}>
                            {worker.JobWorker}
                         </CardText> */}
                </CardBody>
                <p > <MakeAppointement UserID={UserIDu}  WorkerID={worker._id}/> </p> 
                <p > <ConsultReviews WorkerID={worker._id}/> </p> 
                {/* </Card> */}
    
</React.Fragment>
     );
}
 
export default Workers;