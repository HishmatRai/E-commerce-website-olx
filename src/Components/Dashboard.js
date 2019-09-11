import React from 'react';
import {Link} from 'react-router-dom'; 
import PersistentDrawerLeft from './AdminPanel';
import PanelPage from './Box';
import AdminProduct from './AdminProduct'


function Dashboard() {
  
  return (
    <div >
  <PersistentDrawerLeft />
  <PanelPage />
  <AdminProduct />
    </div>
  );
}

export default Dashboard;
