import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { FiLogIn } from "react-icons/fi";
import {firebaseApp} from './../Confic/Database/Firebase';
import {Link} from 'react-router-dom';
import { signup } from './../Confic/function'

// const SignUp = () => {
  class SignUp extends React.Component {
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


signup = async () => {
    let { email, password } = this.state
    try {
        let user = await signup(email, password)
        console.log(user, '==>Singup')
        firebaseApp.firestore().collection('users').doc(user.uid).set(user).then(
            this.props.history.push('/login')
         
        )
        console.log("signuuuuuup")
    }
    catch (err) {
        console.log(err)

    }
}
 render() {
  return (
    // <div>{
    <MDBContainer>
      <MDBRow>
      <MDBCol></MDBCol>

        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up Now</strong>
                </h3>
              </div>
              
              <MDBInput
              
                label="Your full name"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
              
              label="Your mob number"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
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
              
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.signup}
                >
                 Sign Up
                 <FiLogIn />
                </MDBBtn>
                 
              </div>
              
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
               Already a member?
                <a href="#!" className="blue-text ml-1">
                <Link to="/login"> 
                  Log in</Link>
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      <MDBCol></MDBCol>

      </MDBRow>
    </MDBContainer>
  //   </div>
  // };
  );
};
};

export default SignUp;