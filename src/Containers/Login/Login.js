import React from 'react';
import {Link} from 'react-router-dom'
import PrimarySearchAppBar from "./../../Components/AppBar"

import FormPage from '../../Components/Login'
class Login extends React.Component{
  constructor(){
    super();
    this.state={
        count:0,
        myCart:[]
    }
  }
  componentDidMount(){
    if(JSON.parse(localStorage.getItem("myCart"))){
        this.setState({
            myCart:JSON.parse(localStorage.getItem("myCart")),
        })
    }
}

  render(){
    let{count,myCart} = this.state;
  return (
    <div style={{margin: '0 auto'}}>
            <PrimarySearchAppBar myCart={myCart}/>
  
  <br />
  <br />
  <br />
      {console.log(this.props.history)}
      <FormPage history = {this.props.history}/>
    
   
    </div>
  );
}
}
export default Login;