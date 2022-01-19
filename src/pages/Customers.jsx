import React, { useState, useEffect, useRef } from 'react';
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { getCustomerData } from '../features/usersInfo'
import { useRouteMatch, useHistory } from 'react-router-dom'


function Customers () {
    const [ products, setProducts ] = useState( [] )
    const [ nameFilter, setNameFilter ] = useState( '' );
    const [ lastNameFilter, setLastNameFilter ] = useState( '' );
    const [ country, setCountry ] = useState( '' );
    const [ region, setRegion ] = useState( '' );
    const [ address, setAddress ] = useState( '' );
    const [ customerID, setCustomerID ] = useState( '' );
    const [ customerCode, setCustomerCode ] = useState( '' );
    let cusInfo = useSelector( getCustomerData )
    let history = useHistory()
    let { url } = useRouteMatch()
    console.log('cusInfo', cusInfo)

    useEffect( () => {

        setProducts( cusInfo );
    }, [] )
    const addCustomer = () => {
        history.push( `/addcustomer` )
    }

    const editCusInfo = ( id ) => {
        history.push( `/editcustomer/${ id }` )
    }

    function search ( rows ) {
        return rows.filter(
            ( row ) => {
                
                return (
                    
                    row.first_name?.toLowerCase()?.indexOf( nameFilter ) > -1 &&
                    row.last_name?.toLowerCase()?.indexOf( lastNameFilter ) > -1 &&
                    row.country?.toLowerCase()?.indexOf( country ) > -1 &&
                    row.region?.toLowerCase()?.indexOf( region ) > -1 &&
                    row.address?.toLowerCase()?.indexOf( address ) > -1 &&
                    row.cus_id?.toString()?.indexOf( customerID ) > -1 &&
                    row.cus_code?.toString()?.indexOf( customerCode ) > -1
                )
            }
        )
    }
    return (

        <div>
            <div className="container"
             style={{border:'1 px solid black', padding:'10px 10px 10px 10px', backgroundColor:'rgb(237 232 232)',borderBottom:'1px solid black',position:'sticky', top:'0px'}}
            >
                 <div className="row mb-1">
                    <div className="col-6 d-flex justify-content-end">
                        <h5>Filter Customer</h5>
                    </div>
                   
                    <div className="col-6 d-flex justify-content-end">
                    <button
                        onClick={ addCustomer }
                        className="btn btn-primary btn-sm">Add Customer</button>
                    </div>
                   
                </div>
                <div className="row mb-2">
                    <div className="col-4">
                        <div className="d-flex justify-content-between">
                        <span >First Name</span> <input type="text"
                        value={ nameFilter }
                        onChange={ ( e ) => setNameFilter( e.target.value ) }
                        name="nameFilter"
                    />
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="d-flex justify-content-between">
                    <span>Last Name</span> <input type="text"
                        value={ lastNameFilter }
                        onChange={ ( e ) => setLastNameFilter( e.target.value ) }
                        name="lastNameFilter"
                    />
                </div>
                    </div>
                    <div className="col-4">
                    <div  className="d-flex justify-content-between">
                    <span>Country</span> <input type="text"
                        value={ country }
                        onChange={ ( e ) => setCountry( e.target.value ) }
                        name="country"
                    />
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <div  className="d-flex justify-content-between">
                    <span>Region</span> <input type="text"
                        value={ region }
                        onChange={ ( e ) => setRegion( e.target.value ) }

                        name="region"
                    />
                    </div>
                </div>
                <div className="col-4">
                <div className="d-flex justify-content-between">
                    <span>Address</span> <input type="text"
                        value={ address }
                        onChange={ ( e ) => setAddress( e.target.value ) }

                        name="address"
                    />
                </div>
                </div>
                <div className="col-4">
                <div className="d-flex justify-content-between">
                    <span>Customet_ID</span> <input type="text"
                        value={ customerID }
                        onChange={ ( e ) => setCustomerID( e.target.value ) }

                        name="customerID"
                    />
                </div>
                </div>
                
                    </div>
                    <div className="row mt-2">
                        <div className="col-2">
                        <span>Customer_Code</span> 
                        </div>

                        <div className="col-1"
                        style={{marginLeft:'-28px'}}
                        >
                        <input type="text"
                        value={ customerCode }
                        onChange={ ( e ) => setCustomerCode( e.target.value ) }
                        name="customerCode"
                    />
                        </div>
                    </div>
                </div>
     





            <table className="table table-hover"
              
            >
                <thead
                 style={{
                    
                    position: 'sticky',
                    top: '160px',
                    background: 'rgb(237 232 232)',
                    borderBottom: '1px solid black',
                
                                }}
                >
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Customer_ID</th>
                        <th scope="col">Customer_Code</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Region</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        search( products ).map( ( elem, index ) => {
                            console.log(elem)
                            if(products.first_name ==''){
                                products.first_name = ''
                        }
                            return (
                                <tr key={ index }>
                                    <th scope="row">{ elem.id }</th>
                                    <td>{ elem.cus_id }</td>
                                    <td>{ elem.cus_code }</td>
                                    <td>{ elem.first_name }</td>
                                    <td>{ elem.last_name }</td>
                                    <td>{ elem.country }</td>
                                    <td>{ elem.region }</td>
                                    <td>{ elem.address }</td>
                                    <td><button class="btn btn-primary" onClick={ () => editCusInfo( elem.id ) }>Update</button></td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Customers;

