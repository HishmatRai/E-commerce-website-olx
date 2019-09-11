    
import React from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import {  Home,Signup,Login,Shop,SingleProduct,CardView,CheckOut,Admin,AddProduct,EditRemove,Dashboard,AdminLogin,Contactus,Order} from "../../Containers";

class BasicRouter extends React.Component{
    render(){
        return (
            <Router >
                <Route exact path='/' component={Home} />
                <Route  path='/signup' component={Signup} />
                <Route  path='/login' component={Login} />
                <Route  path='/shop' component={Shop} />
                <Route  path='/singleproduct' component={SingleProduct} />
                <Route  path='/cardview' component={CardView} />
                <Route  path='/checkout' component={CheckOut} />
                <Route  path='/admin' component={Admin} />
                <Route  path='/addproduct' component={AddProduct} />
                <Route  path='/editremove' component={EditRemove} />
                <Route  path='/dashboard' component={Dashboard} />
                <Route  path='/adminlogin' component={AdminLogin} />
                <Route  path='/contactus' component={Contactus} />
                <Route  path='/order' component={Order} />
            </Router>
        )
    }
}

export default BasicRouter