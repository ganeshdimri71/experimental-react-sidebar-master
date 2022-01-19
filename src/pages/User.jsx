import React, { useState, useEffect } from 'react';
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserData } from '../features/usersInfo'

function User () {
    const [ products, setProducts ] = useState( [] )
    const [ username, setUsername ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ nameFilter, setNameFilter ] = useState( '' );
    const [ country, setCountry ] = useState( '' );
    const [ address, setAddress ] = useState( '' );
    const [ customerID, setCustomerID ] = useState( '' );
    const [ userID, setUserID ] = useState( '' );
    let userInfo = useSelector( getUserData )

    let { url } = useRouteMatch();
    let history = useHistory();




    const addUser = () => {
        history.push( `/adduser` )
    }


    const editUserInfo = ( id ) => {
        history.push( `edituser/${ id }` )
    }

    useEffect( () => {

        setProducts( userInfo );
    }, [userInfo] )
    function search ( rows ) {
        return rows.filter(
            ( row ) => {

                return (
                    row.user_name?.toLowerCase().indexOf( username ) > -1 &&
                    row.email?.toLowerCase().indexOf( email ) > -1 &&
                    row.Name?.toLowerCase().indexOf( nameFilter ) > -1 &&
                    row.country?.toLowerCase().indexOf( country ) > -1 &&
                    row.address?.toLowerCase().indexOf( address ) > -1 &&
                    row.cus_id?.toString().indexOf( customerID ) > -1 &&
                    row.user_id?.toString().indexOf( userID ) > -1
                )
            }
        )
    }
    return (
        <div 
        >
            <div className="container"
            style={{border:'1 px solid black', padding:'10px 10px 10px 10px', backgroundColor:'rgb(237 232 232)',borderBottom:'1px solid black',position:'sticky', top:'0px'}}
            >
                <div className="row mb-1">
                    <div className="col-6 d-flex justify-content-end">
                        <h5>Filter User</h5>
                    </div>
                   
                    <div className="col-6 d-flex justify-content-end">
                    <button
                        onClick={ addUser }
                        className="btn btn-primary btn-sm">Add User</button>
                    </div>
                   
                </div>
                <div className="row mb-2">
                <div className="col-4">
                <div
                className="d-flex justify-content-between"
                >
                    <span >Email</span> <input type="text"
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        name="email"
                    />
                </div>
                </div>
                <div className="col-4">
                <div  className="d-flex justify-content-between">
                    <span >Name</span> <input type="text"
                        value={ nameFilter }
                        onChange={ ( e ) => setNameFilter( e.target.value ) }
                        name="Name"
                    />
                </div>
                </div>
                <div className="col-4">
                     
                <div  className="d-flex justify-content-between">
                    <span >Country</span> <input type="text"
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
                    <span >Address</span> <input type="text"
                        value={ address }
                        onChange={ ( e ) => setAddress   ( e.target.value ) }

                        name="address"
                    />
                </div>
                    </div>
                    <div className="col-4">
                    <div  className="d-flex justify-content-between">
                    <span >Customet_ID</span> <input type="text"
                        value={ customerID }
                        onChange={ ( e ) => setCustomerID( e.target.value ) }

                        name="cus_id"
                    />
                </div>
                </div>
                <div className="col-4">
                <div  className="d-flex justify-content-between"
                >
                    <span >User_ID</span> <input type="text"
                        value={ userID }
                        onChange={ ( e ) => setUserID( e.target.value ) }
                        name="user_id"
                    />
                </div>
              
                </div>
                    </div>
                </div>
               
             
           
            

            {/* </div> */}



            {/* <div
            >
               
            </div> */}
            <table className="table table-hover">
                <thead
                style={{
                    
    position: 'sticky',
    top: '123px',
    background: 'rgb(237 232 232)',
    borderBottom: '1px solid black',

                }}
                >
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Address</th>
                        <th scope="col">User_ID</th>
                        <th scope="col">Customer_ID</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        search( products ).map( ( elem, index ) => {
                            return (
                                <tr key={ index }>
                                    <th scope="row">{ elem.id }</th>
                                    <td>{ elem.user_name }</td>
                                    <td>{ elem.email }</td>
                                    <td>{ elem.Name }</td>
                                    <td>{ elem.country }</td>
                                    <td>{ elem.address }</td>
                                    <td>{ elem.user_id }</td>
                                    <td>{ elem.cus_id }</td>
                                    <td><button class="btn btn-primary" onClick={ () => editUserInfo( elem.id ) }>Update</button></td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </div >
    );
}

export default User;

