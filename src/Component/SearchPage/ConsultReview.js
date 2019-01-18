import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import axios from 'axios';
const WorkerReviews = (props) => {
    const { Single = {}} = props
    const {
                   _id= 'none',
                  WorkerID= 'none', 
                   UserID= 'none', 
                   Content= 'none', 
                   Date= 'none', 
                   Time='none',
                   CommitementRating= 0,
                   QualityRating= 0,
    } =  Single
   
        return (
          <div>
                  
                  
<div className="card"  style={{marginBottom: '1%'}}>
<div className="card-header text-center" >
    Review  
          </div>
<div className="card " style={{padding: '1%'}}>
  <div className="card-header bg-success">
  User Id: {UserID }  </div>
  <div className="card-body">
    <h5 className="card-title">{Content} </h5>
    <p className="card-text"></p>
    <div>
        <p>Commitment Rating</p>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${CommitementRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
    <div>
        <p>Service Quality Rating</p>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-info" role="progressbar"style={{width: `${QualityRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
  </div>
  <div className="card-footer bg-success">
   <p>At {Time },  {Date} </p>
  </div>
</div>
</div>      
        </div>);
     
    }

    const Tab = ({contacts}) => (
        <div >
           {
               contacts.map(el => <WorkerReviews Single={el} /> )
           }
          
         </div>
      )
class ConsultReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          alist: []
        };
      }
    
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    componentWillMount(){
    axios.get("/WorkerReviews/"+this.props.WorkerID).then(res=>
    this.setState({
      alist: res.data
      }))
    
    }
      render() {
        return (
        //   <div> 
        //   <HeaderWorker _id={this.props.id}/>
        //   <div className="reviewstyle">
        //   <Tab contacts={this.state.alist} /> /></div>
        //   <FooterWorker/> 
        // </div>
        <Container>
        <Button onClick={this.toggle} color="info"> See Reviews </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> See Reviews </ModalHeader>
          <ModalBody>
          <div className="reviewstyle">
      <Tab contacts={this.state.alist} /> </div>
         </ModalBody>
          <ModalFooter>
          
           
          </ModalFooter>
        </Modal>
      </Container>
        );
      }
}

export default ConsultReview;
