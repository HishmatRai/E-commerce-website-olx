import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import { MdAddShoppingCart } from "react-icons/md";
import Button from '@material-ui/core/Button';
import {firebaseApp} from "./../Confic/Database/Firebase";
import DropdownPage from './Dropdown';
import PersistentDrawerLeft from './AdminPanel';


import {Link} from 'react-router-dom'


// import upload from '../image/upload.png'
export default class FormPage extends React.Component {
    constructor() {
        super()
        this.state = {
          productname:"",
          productprice:"",
          productimage:"",
          productdescription:"",

        }
    }
    // handleFile = e => {
    //     this.setState({ ...this.state, [e.target.name]: e.target.value});
    // };

    
    

AddProducts(){
  firebaseApp.firestore().collection("Products").add(this.state)
}



async imageUpload(e) {
  let fileName = e.target.files[0].name
  console.log(fileName)
  let ref = firebaseApp.storage().ref('/').child(`images/${fileName}`)
  await ref.put(e.target.files[0])
  ref.getDownloadURL().then((url)=> {
      console.log(url);
    this.setState ( {
      productimage : url
    })
  });
}



    render() {
     let{productimage} = this.state
     
        return(
          <div>
<PersistentDrawerLeft/>
<Paper>
            <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h4 text-center mb-4">Add Products</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
            Product Name :
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
              onChange={(e)=>this.setState({productname:e.target.value})}
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
             Product Price :
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
              onChange={(e)=>this.setState({productprice:e.target.value})}
              
            />





<br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
             Product Category :
            </label>
          
              <DropdownPage />
            




            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Product Image :
            </label>
            <input
              type="file"
              id="defaultFormContactSubjectEx"
              className="form-control"
              // onChange={(e)=>this.setState({productimage:e.target.value})}
              onChange={this.imageUpload.bind(this)}
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
           Product Description :
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
              onChange={(e)=>this.setState({productdescription:e.target.value})}
            />
            <div className="text-center mt-4">
            <Button onClick={this.AddProducts.bind(this)} size="large" style={{ color: "#fff", backgroundColor: "#3f50b5", marginTop: "30px" }}>
                  <MdAddShoppingCart /> Add Product
                    </Button>
       <p></p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer></Paper>
    </div>
        )
    }
}