import React from 'react';
import {Link} from 'react-router-dom'
import PersistentDrawerLeft from './../../Components/AdminPanel'
function Admin(props) {
  console.log(props)
  return (
    <div >
   < PersistentDrawerLeft  />
    </div>
  );
}

export default Admin;