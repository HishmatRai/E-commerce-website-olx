import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <MDBDropdown style={{width:"400px"}}>
      <MDBDropdownToggle caret color="primary">
        Select your category
      </MDBDropdownToggle>
      <MDBDropdownMenu right basic>
        <MDBDropdownItem>Mobile</MDBDropdownItem>
        <MDBDropdownItem>Laptop</MDBDropdownItem>
        <MDBDropdownItem>Dressing</MDBDropdownItem>
        <MDBDropdownItem>Watch</MDBDropdownItem>
        <MDBDropdownItem>Glasses</MDBDropdownItem>
        <MDBDropdownItem>Furniture</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;