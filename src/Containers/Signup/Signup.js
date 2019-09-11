import React from 'react';
import {Link} from 'react-router-dom'
import SignUp from './../../Components/SignUp'
import PrimarySearchAppBar from "./../../Components/AppBar"

class Signup extends React.Component{
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
<SignUp />
    </div>
  );
}
}

export default Signup;