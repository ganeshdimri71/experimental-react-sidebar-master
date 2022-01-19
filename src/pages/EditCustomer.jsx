
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCustomerData, getCustomerData, changeCustomerData } from '../features/usersInfo'
import { useRouteMatch, useParams, useHistory } from 'react-router-dom'


const EditCustomer = ( { hideContent } ) => {
    let { id } = useParams();
    let history = useHistory();
    let cusInfo = useSelector( getCustomerData )
    let dispatch = useDispatch()
    


    const [ customer, setCustomer ] = useState( {

    } );

    const onInputChange = e => {
        setCustomer( { ...customer, [ e.target.name ]: e.target.value } );
    };



    useEffect( () => {
        setCustomer( {
            id: cusInfo[ id - 1 ].id,
            cus_id: cusInfo[ id - 1 ].cus_id,
            cus_code: cusInfo[ id - 1 ].cus_code,
            first_name: cusInfo[ id - 1 ].first_name,
            last_name: cusInfo[ id - 1 ].last_name,
            country: cusInfo[ id - 1 ].country,
            region: cusInfo[ id - 1 ].region,
            address: cusInfo[ id - 1 ].address,

        } )
    }, [] );

    const onSubmit = async e => {
        e.preventDefault();
        dispatch( changeCustomerData( customer ) )

        history.push( "/customer" );
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
                                    <h3 className="fieldset-title">First Name</h3>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.first_name }
                                                name="first_name"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.last_name }
                                                name="last_name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Country</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.country }
                                                name="country"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Region</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.region }
                                                name="region"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Address</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.address }
                                                name="address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Customer_ID</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.cus_id }
                                                name="cus_id"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Customer_Code</label>
                                        <div className="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control"
                                                onChange={ onInputChange }
                                                value={ customer.cus_code }
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
                                                className="btn btn-primary"
                                                type="submit"
                                                value="Update Profile" />
                                            <input
                                                className="btn btn-primary"
                                                type="submit"
                                                value="Close" />
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

export default EditCustomer;
