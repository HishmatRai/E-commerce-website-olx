import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md"
import Button from '@material-ui/core/Button';
import PersistentDrawerLeft from './AdminPanel'
import { Link } from 'react-router-dom';

const TableEditablePage = props => {
    return (
        <div>
            <PersistentDrawerLeft />
            <MDBCard>

                <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                    Order
      </MDBCardHeader>
                <MDBCardBody>
                    <table className="table" width="100%">
                        <tr>
                            <th className="th">User Name</th>
                            <th className="th">Mobile Number</th>
                            <th className="th">Address </th>
                            <th className="th">City </th>
                            <th className="th">Category</th>
                            <th className="th">image</th>
                            <th className="th">Title</th>
                            <th className="th">Accept</th>
                            <th className="th">Cancel</th>
                        </tr>




                        <tr>
                            <td>
                                <span style={{ color: "black" }}>
                                    Hishmat Rai
                                    
</span>

                            </td>
                            <td>
                                <span style={{ color: "black" }}>
                                    03322404609
                                    
</span>

                            </td>
                            <td>
                                <span style={{ color: "black" }}>Badharabad Near ZB</span>

                            </td>

                            <td>
                                <span style={{ color: "black" }}>Karachi</span>

                            </td>
                            <td>
                                <span style={{ color: "black" }}> Laptop</span>

                            </td>
                            <td>
                                <span >

                                <img width="40px" src='https://store.hp.com/UKStore/Html/Merch/Images/c05975360_1750x1285.jpg' />

                                </span>

                            </td>
                            <td>
                                <span style={{ color: "black" }}> 
                                HP  Laptop
                                
                                </span>

                            </td>
                            <td>
                                <span style={{ color: "black" }}>
                                    <Button onClick={() => alert("edit")} size="large" style={{ color: "#fff", backgroundColor: "#3f50b5", padding: "0px" }}>
                                      Accept
                    </Button>
                                </span>

                            </td>
                            <td>
                                <span style={{ color: "black" }}> <Button onClick={() => alert("edit")} size="large" style={{ color: "#fff", backgroundColor: "#3f50b5", padding: "0px" }}>
                                      Cancel
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