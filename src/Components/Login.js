import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { FiLogIn } from "react-icons/fi";
import { login } from './../Confic/function';
import {firebaseApp} from './../Confic/Database/Firebase';
import {Link} from 'react-router-dom'
import {loginfacebook} from './../Confic/function'
// const FormPage = () => {
  class FormPage extends React.Component {
    constructor(props) {
  
      super(props)
      this.state = {
        myCart: [],
        email: "",
        password: ""
      }
  
    }
    componentDidMount() {
      var cart = localStorage.getItem('cartValue');
      if (cart) {
        this.setState({
          myCart: JSON.parse(cart)
        })
      }
    }
  
    login = async () => {
      let { email, password } = this.state
      try {
        let user = await login(email, password)
        console.log(user, '==>Login')
        if (user) {
          this.props.history.push('/checkout')
        }
      }
      catch (err) {
        console.log(err)
  
      }
  
  
    }
    facebook = async()=>{
      try{

      let fac = await loginfacebook()
      console.log(fac,this.props.history)
      this.props.history.push("/checkout")
      }
    catch(err){
console.log(err)
    }
    }
    render() {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol></MDBCol>

        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              
              <MDBInput
              
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.login}
                >
                  Sign in
                 <FiLogIn />
                </MDBBtn>
                 
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"

                  onClick={this.facebook}
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                {/* <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                > */}
                  {/* <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                > */}
                  {/* <MDBIcon fab icon="google-plus-g" className="blue-text" /> */}
                {/* </MDBBtn> */}
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">
                <Link to="/signup"> 
                  Sign Up</Link>
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      <MDBCol></MDBCol>

      </MDBRow>
    </MDBContainer>
  );
              };
};

export default FormPage;