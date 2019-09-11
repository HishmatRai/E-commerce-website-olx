import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Paper from '@material-ui/core/Paper';
import PrimarySearchAppBar from "./AppBar"
import {firebaseApp} from "./../Confic/Database/Firebase";
// class FormsPage extends React.Component {
  export default class FormsPage extends React.Component {
    constructor() {
        super()
        this.state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    mnumber: "",
    address:"",
    cardname: "",
    cardnumber: "",
    cardexpiration: "",
    cardcvv: "",
    myCart:[],
    products :[]
  };
}
usersdata(){
  firebaseApp.firestore().collection("Users").add(this.state)
}
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount(){
    if(JSON.parse(localStorage.getItem("myCart"))){
        this.setState({
            myCart:JSON.parse(localStorage.getItem("myCart")),
        })
    }
    let {products} = this.state
    firebaseApp.firestore().collection("Products").get()
    .then(data => {
        data.forEach(doc => {
            let getData = doc.data()
            products.push(getData)
            this.setState({
                products:products
            })
        })
        
    })
}
  render() {
    let{products,myCart} = this.state;

    return (
      <div>
            <PrimarySearchAppBar myCart={myCart}/>
       <br />
        <Paper>
          <Paper>

          <h1 style={{textAlign:"center",fontWeight:"bold"}}>Check out</h1>
          </Paper>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
                onChange={(e)=>this.setState({fname:e.target.value})}
              />
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
                onChange={(e)=>this.setState({lname:e.target.value})}
              />
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
                onChange={(e)=>this.setState({email:e.target.value})}
              />
                <div className="invalid-tooltip">
                Please provide a valid email.
              </div>
              <div className="valid-tooltip">Looks good!</div>

            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                City
              </label>
              <input
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
                onChange={(e)=>this.setState({city:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid city.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
            Mobile Number
              </label>
              <input
                value={this.state.mnumber}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="mobile number"
                required
                onChange={(e)=>this.setState({mnumber:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid mobile number.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
               Address
              </label>
              <input
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Address"
                required
                onChange={(e)=>this.setState({address:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid Address.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>

            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
            Name on card
              </label>
              <input
                value={this.state.cardname}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="cardname"
                placeholder="Name on card"
                required
                onChange={(e)=>this.setState({cardname:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid Name on card.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>


            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
            Card number
              </label>
              <input
                value={this.state.cardnumber}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="cardnumber"
                placeholder="   Card number"
                required
                onChange={(e)=>this.setState({cardnumber:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid    Card number.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>

            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
       Expiration
              </label>
              <input
                value={this.state.cardexpiration}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="cardexpiration"
                placeholder="   Expiration"
                required
                onChange={(e)=>this.setState({cardexpiration:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid    Expiration.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>


            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
       CVV
              </label>
              <input
                value={this.state.cardcvv}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="cardcvv"
                placeholder="  CVV"
                required
                onChange={(e)=>this.setState({cardcvv:e.target.value})}
              />
              <div className="invalid-tooltip">
                Please provide a valid    CVV.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBCol>


          </MDBRow>
          <center>

          <MDBBtn color="primary" type="submit"
          onClick={this.usersdata.bind(this)}
          >
          
            Submit
          </MDBBtn>
          </center>
        </form>
        </Paper>
      </div>
    );
  }
}

// export default FormsPage;