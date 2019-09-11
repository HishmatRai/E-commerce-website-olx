import React from "react";
import {Link} from 'react-router-dom'
import AminPanel from './AdminPanel'
import './Allcss.css'
import {Adminlogin} from './../Confic/function'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

// const FormPage = () => {
    class FormPage extends React.Component {
        constructor(props){
          super(props)
          this.state={
            login : true,
            email : "",
            password : ''
          }
        }
      
        Adminlogin= async()=>{
           console.log(this.props)
           try{
             let user = await Adminlogin(this.state);
             console.log(user);
             this.props.history.push('/dashboard')
          }
          catch(err){
            alert(err.message)
          }
        }
      
        render() {
        let raaaaa =  this.state
        console.log(raaaaa)
  return (
      <div>
          <AminPanel />
    <MDBContainer>
      <MDBRow>
      <MDBCol></MDBCol>
        <MDBCol xs="12" sm="12" lg="8" xl="6" size="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="adminlogin" >
                <h3 className="my-3" >
                  <MDBIcon icon="lock" /> Admin Login:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Type admin email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onchange={(e)=>{this.setState({email : e.target.value})}}
                  />
                  <MDBInput
                    label="Type admin password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onchange={(e)=>{this.setState({password : e.target.value})}}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                  onclick={this.login}
                >
                  Login
                </MDBBtn>
              </div>
              </form>
       
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>

      </MDBRow>
    </MDBContainer></div>
  );
        };
};

export default FormPage;