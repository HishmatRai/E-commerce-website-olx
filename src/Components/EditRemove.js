import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md"
import Button from '@material-ui/core/Button';
import PersistentDrawerLeft from './AdminPanel'
import {Link} from 'react-router-dom'; 

const TableEditablePage = props => {
  return (
  <div>
    <PersistentDrawerLeft />
    <MDBCard>

      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Edit and Delete Products
      </MDBCardHeader>
      <MDBCardBody>
      <table className="table" width="100%">
  <tr>
    <th className="th">Image</th>
    <th className="th">Title</th>
    <th className="th">Description </th>
    <th className="th">Category </th>
    <th className="th">Price</th>
    <th className="th">Edit</th>
    <th className="th">Delete</th>
  </tr>

 


  <tr>
  <td>
  <img width="100px" src='https://store.hp.com/UKStore/Html/Merch/Images/c05975360_1750x1285.jpg' />
  
  </td>
  <td>
  <span  style={{color:"black"}}>
HP 17-ca0003na HD Laptop

</span>
  
  </td>
  <td>
    <span style={{color:"black"}}>Designed for long-lasting performance, this stylishly HP 9 cm (17.3) laptop.</span> 

    </td>

<td>
    <span style={{color:"black"}}>Laptop</span> 

    </td>
    <td>
    <span style={{color:"black"}}> 32999</span> 

    </td>
    <td>
    <span style={{color:"black"}}>
    <Button onClick={()=>alert("edit")}size="large" style={{ color: "#fff", backgroundColor: "#3f50b5",padding:"0px" }}>
          <MdEdit />    Edit
                    </Button>
        </span> 

    </td>
    <td>
    <span style={{color:"black"}}> <Button onClick={()=>alert("edit")}size="large" style={{ color: "#fff", backgroundColor: "#3f50b5",padding:"0px" }}>
    <MdDelete />   Delete
                    </Button></span> 

    </td>
  </tr>
  

</table> 
      </MDBCardBody>
    </MDBCard>
    </div>
  );
};

export default TableEditablePage;