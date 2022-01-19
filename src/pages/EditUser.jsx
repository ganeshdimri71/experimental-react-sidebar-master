import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { changeUserData, getUserData, getCustomerData } from '../features/usersInfo'

const EditUser = ( { hideContent } ) => {
    console.log( 'Hello' )
    const [ user, setUser ] = useState( {
        id: "",
        user_name: "",
        email: "",
        Name: "",
        country: "",
        address: "",
        user_id: "",
        cus_id: "",
    } );
    let userInfo = useSelector( getUserData )
    let cusInfo = useSelector( getCustomerData )
    let history = useHistory();
    const { id } = useParams();
    let dispatch = useDispatch()



    const onInputChange = e => {
        setUser( { ...user, [ e.target.name ]: e.target.value } );
    };

    useEffect( () => {
        setUser( {
            id: userInfo[ id - 1 ].id,
            user_name: userInfo[ id - 1 ].user_name,
            email: userInfo[ id - 1 ].email,
            Name: userInfo[ id - 1 ].Name,
            country: userInfo[ id - 1 ].country,
            address: userInfo[ id - 1 ].address,
            user_id: userInfo[ id - 1 ].user_id,
            cus_id: userInfo[ id - 1 ].cus_id,
        } )
    }, [] );

    const onSubmit = e => {
        e.preventDefault();
        dispatch( changeUserData( user ) )
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
                                                value={ user.user_name }
                                                onChange={ onInputChange }
                                                name="user_name"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Email</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                value={ user.email }
                                                onChange={ onInputChange }
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Name</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                value={ user.Name }
                                                onChange={ onInputChange }
                                                name="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Country</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                value={ user.country }
                                                onChange={ onInputChange }
                                                name="country"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Address</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                value={ user.address }
                                                onChange={ onInputChange }
                                                name="address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">User_ID</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                value={ user.user_id }
                                                onChange={ onInputChange }
                                                name="user_id"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Customer_ID</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                value={ user.cus_id }
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
                                            <input className="btn btn-primary" type="submit" value="Update Profile" />
                                            <input className="btn btn-primary" type="submit" value="Close" />
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
