import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { changeUserData, getUserData, getCustomerData, addUserInfo, addCustomerInfo } from '../features/usersInfo'

const EditUser = ( { hideContent } ) => {
    const [ addCustomer, setAddCustomer ] = useState( {
        id:'',
        first_name:'',
        last_name:'',
        region:'',
        country:'',
        address:'',
        cus_id:'',
        cus_code:''
    } );
    let userInfo = useSelector( getUserData )
    let cusInfo = useSelector( getCustomerData )
    let history = useHistory();
    let dispatch = useDispatch()



    const onInputChange = e => {
        setAddCustomer( { ...addCustomer, [ e.target.name ]: e.target.value } );
        console.log( addCustomer )
    };

    const closePage = e => {
        e.preventDefault();
        history.push( "/dashboard/customer" );
    };

    useEffect( () => {

    }, [] );

    useEffect( () => {
        hideContent()

    } )

    const onSubmit = e => {
        e.preventDefault();
        dispatch( addCustomerInfo( { ...addCustomer, id: cusInfo[ cusInfo.length - 1 ].id + 1 } ) )

        history.push( "/dashboard/customer" );
    };


    return (
        <div className="container"
            style={ {
                position: "relative",
                bottom: "110%",
                right: '-113%',
                width: '83vw',
                zIndex: "999",
            } }
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
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Fist Name</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="first_name"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="last_name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Region</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="region"
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
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Customer_ID</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="cus_id"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Customer_Code</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                name="cus_code"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <div className="form-group">
                                    <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                        <div className="d-flex justify-content-between">
                                            <input
                                                className="btn btn-primary" type="submit" value="Add Customer" />
                                            <input
                                                onClick={ closePage }
                                                className="btn btn-primary" type="submit" value="Close" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EditUser;
