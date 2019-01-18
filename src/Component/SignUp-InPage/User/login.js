import React from 'react'
import {Redirect,Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



 
class Login extends React.Component {
  constructor(props)    {
    super(props);
    this.state={
        email:'',
        password:''
    }
  }
  handelchange =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
  this.setState({
    [name]:value
  })}
  
  // check=()=>{
  //   if(((this.state.email === 'hamdi@yahoo.Fr' && this.state.password==='1425236Aa' ) 
  //   || (this.state.password=== '100000AAa' && this.state.email === 'hanen@gmail.com'))){
  //     return true
  //   }
  //   else{
  //     alert('Email or Paswword incorrect')
  //   }
  // }
  
    render(){
          return (
         <form>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                name="email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={this.handelchange}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                name="password"
                type="password"
                validate
                onChange={this.handelchange}
              />
            </div>
            <div className="text-center">
              <Link to={((this.state.email === 'FaresBenLahmer@gmail.com' && this.state.password==='123456' ) 
                    || (this.state.password=== '100000AAa' && this.state.email === 'hanen@gmail.com')) ? '/UserProfil/000001' : '/SignInUp'}>
              <MDBBtn 
              color="light-green"
              // onClick={this.check}
              >
              Login
              </MDBBtn>
              </Link>
            </div>
          </form>
      
    

              
            
         
      );
    }
}
 
export default Login;