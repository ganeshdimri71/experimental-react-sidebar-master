import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import User from "./pages/User";
import Customers from "./pages/Customers";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import AddUser from './pages/AddUser'
import AddCustomer from './pages/AddCustomer'
import EditUser from "./pages/EditUser";
import EditCustomer from "./pages/EditCustomer.jsx";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/user" component={User}/>
                        <Route path="/customer" component={Customers}/>
                        <Route path="/subscription" component={Subscription}/>
                        <Route path="/adduser" component={AddUser}/>
                        <Route path="/addcustomer" component={AddCustomer}/>
                        <Route path="/edituser/:id" component={EditUser}/>
                        <Route path="/editcustomer/:id" component={EditCustomer}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
