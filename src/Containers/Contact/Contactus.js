import React from 'react';
import {Link} from 'react-router-dom'
import PrimarySearchAppBar from "./../../Components/AppBar"
import {firebaseApp} from "./../../Confic/Database/Firebase";
import ContactPage from './../../Components/Contact';
import Paper from '@material-ui/core/Paper';

    class Contactus extends React.Component{
        constructor(){
          super();
          this.state={
              count:0,
              myCart:[],
              products :[]
          }
        }
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
      
        render(){
          let{products,myCart} = this.state;
      
          return (
            <div >
                  <PrimarySearchAppBar myCart={myCart}/>
            <br />
                                   <ContactPage />
             
     
    
    </div>
  );
          }
}

export default Contactus;
