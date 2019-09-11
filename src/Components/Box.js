import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import Paper from '@material-ui/core/Paper';

const PanelPage = () => {
return (
<MDBContainer>
  <MDBRow className="mb-4">
 

    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <Paper>

           <p style={{textAlign:"center",fontWeight:"bold"}}>All Product</p>
            </Paper>
            {/* <img src='http://www.clker.com/cliparts/w/Z/C/s/n/T/total-button-png-hi.png' width="520px"/> */}
            </MDBCardTitle>
          <MDBCardText>
            {/* <Paper> */}

          <h1 style={{textAlign:"center"}}>1</h1>
            {/* </Paper> */}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>



    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <Paper>

           <p style={{textAlign:"center",fontWeight:"bold"}}>All Budget</p>
            </Paper>
            {/* <img src='http://www.clker.com/cliparts/w/Z/C/s/n/T/total-button-png-hi.png' width="520px"/> */}
            </MDBCardTitle>
          <MDBCardText>
            {/* <Paper> */}

          <h1 style={{textAlign:"center"}}>32999</h1>
            {/* </Paper> */}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>



    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <Paper>

           <p style={{textAlign:"center",fontWeight:"bold"}}>All User</p>
            </Paper>
            {/* <img src='http://www.clker.com/cliparts/w/Z/C/s/n/T/total-button-png-hi.png' width="520px"/> */}
            </MDBCardTitle>
          <MDBCardText>
            {/* <Paper> */}

          <h1 style={{textAlign:"center"}}>1</h1>
            {/* </Paper> */}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>



    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
       <Paper>

           <p style={{textAlign:"center",fontWeight:"bold"}}>Order</p>
       </Paper>

            


            {/* <img src='http://blogs.gartner.com/christy-ferguson/files/2018/01/New-product-launch.jpg' width="440px"/> */}
            </MDBCardTitle>
          <MDBCardText>
          <h1 style={{textAlign:"center"}}>1</h1>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

 

  </MDBRow>
</MDBContainer>
);
};

export default PanelPage;