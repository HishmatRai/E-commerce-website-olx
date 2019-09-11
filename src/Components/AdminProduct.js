import React from 'react';
function AdminProduct() {
  return (
    <div >
     
     <table className="table" width="100%">
  <tr>
    <th className="th">Image</th>
    <th className="th">Title</th>
    <th className="th">Description </th>
    <th className="th">Category </th>
    <th className="th">Price</th>
  </tr>

 


  <tr>
  <td>
  <img width="100px" src='https://store.hp.com/UKStore/Html/Merch/Images/c05975360_1750x1285.jpg' />
  
  </td>
  <td>
  <span  style={{color:"black"}}>
HP 17-ca0003na HD Laptop</span>
  
  </td>
  <td>
    <span style={{color:"black"}}>Designed for long-lasting performance, this stylishly HP 9 cm (17.3) laptop.</span> 

    </td>

<td>
    <span style={{color:"black"}}>Laptop</span> 

    </td>
    <td>
    <span style={{color:"black"}}>32999</span> 

    </td>
  
  </tr>
  

</table> 
    </div>
  );
}

export default AdminProduct;
