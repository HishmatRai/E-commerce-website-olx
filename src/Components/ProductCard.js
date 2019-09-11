import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";

const eCommercePage = () => {
  return (
    <MDBCard className="m-2" style={{ width: "15rem" }} cascade ecommerce>
      <MDBCardImage cascade top src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone7-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1550795429263" waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
       Moblie
        </MDBCardTitle>
        <MDBCardTitle>
          <a href="#!"><strong>iPhone 7</strong></a>
        </MDBCardTitle>
        <MDBCardText>
          TThe longest battery life ever in an iPhone.
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">49$ <span className="discount">499$</span></span>
          <span className="float-right">
          <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                <MDBIcon icon="heart"/>
              </MDBBtn>
              <div>Added to Wishlist</div>
            </MDBTooltip>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}

export default eCommercePage;