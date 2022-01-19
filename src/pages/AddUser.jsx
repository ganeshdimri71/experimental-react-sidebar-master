import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getUserData, getCustomerData, addUserInfo } from '../features/usersInfo'

const AddUser = ( { hideContent } ) => {
    const [ addUser, setAddUser ] = useState( {
        id:'',
        user_name:'',
        email:'',
        Name:'',
        country:'',
        address:'',
        cus_id:'',
        user_id:''


    } );
    let userInfo = useSelector( getUserData )
    let history = useHistory();
    let dispatch = useDispatch()

    const onInputChange = e => {
        setAddUser( { ...addUser, [ e.target.name ]: e.target.value } );
    };

    const closePage = e => {
        e.preventDefault();
        history.push( "/user" );
    };


    const onSubmit = e => {

        e.preventDefault();
        dispatch( addUserInfo( {...addUser, id:userInfo[userInfo.length-1].id+1} ) )
        history.push( "/user" );
    };

 

    return (
        <div className="container"
        style={{width:'100vw'}}
        >
            <div className="view-account">
                <section className="module">
                    <div className="module-inner">
                        <div className="content-panel">
                            <h2 className="title"><span className="pro-label label label-warning"></span></h2>
                            <form className="form-horizontal" onSubmit={ e => onSubmit( e ) }>
                                <fieldset className="fieldset">
                                    <h3 className="fieldset-title">Personal Info</h3>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Username</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="user_name"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Email</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Name</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Country</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="country"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Address</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">User_ID</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="user_id"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Customer_ID</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="cus_id"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <div className="form-group">
                                    <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                        <div className="d-flex justify-content-between">
                                            <input
                                                className="btn btn-primary" type="submit" value="Add User" />
                                            <input
                                                onClick={ closePage }
                                                className="btn btn-primary" type="submit" value="Close" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section >
            </div >
        </div >
    );
};

export default AddUser;
