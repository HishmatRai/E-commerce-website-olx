import React from 'react';
import {Link} from 'react-router-dom'
import PrimarySearchAppBar from './AppBar'
import Button from '@material-ui/core/Button';


class CardView extends React.Component{
  constructor(props){
   
    super();
    this.state={
        // count:0,
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
    <div >
      <PrimarySearchAppBar props={this.props} myCart={this.state.myCart}/>
  <table className="table">
  <tr>
    <th className="th">Image</th>
    <th className="th">Title</th>
    <th className="th">Price</th>
    <th className="th">Total Price</th>
    <th className="th">Quantity</th>
    <th className="th">Remove</th>
  </tr>
{
  myCart.map((val=>{
return (

  <tr>
  <td>
  <img width="200px" src={val.image} />
  
  </td>
  <td>
  <span  style={{color:"black"}}>{val.title}</span>
  
  </td>
  <td>
    <span style={{color:"#3f51b5"}}>{val.price}</span> 

    </td>

<td>
    <span style={{color:"#3f51b5"}}>{val.price * val.count}</span> 

    </td>
    <td>
    <span style={{color:"#3f51b5"}}>{val.count}</span> 

    </td>
    <td>
    ❌
    </td>
  </tr>
  
)
}))
  }
</table> 
<center>
<hr />
<Button onClick={()=>this.props.history.push('/login')}size="large" style={{ color: "#fff", backgroundColor: "#3f50b5", marginTop: "30px" }}>
                    Check Out
                    </Button>
</center>

    </div>
  );
}
}

export default CardView;