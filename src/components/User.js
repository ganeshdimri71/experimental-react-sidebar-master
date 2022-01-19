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
        history.push( `${ url }/add` )
    }


    const editUserInfo = ( id ) => {
        history.push( `${ url }/edit/${ id }` )
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
        <div style={ {
            position: "relative",
            top: '-111%',
            right: '-113%',
            width: '83vw',
            height: '100vh',
            zIndex: "999",
        } } >
            <h4 className="text-center mt-4">Filter User</h4>
            <div className="d-flex justify-content-between">
                <div >
                    <span>Username</span> <input type="text"
                        value={ username }
                        onChange={ ( e ) => setUsername( e.target.value ) }
                        name="user_name"
                    />
                </div>
                <div>
                    <span>email</span> <input type="text"
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        name="email"
                    />
                </div>
                <div>
                    <span>Name</span> <input type="text"
                        value={ nameFilter }
                        onChange={ ( e ) => setNameFilter( e.target.value ) }
                        name="Name"
                    />
                </div>
                <div>
                    <span>Country</span> <input type="text"
                        value={ country }
                        onChange={ ( e ) => setCountry( e.target.value ) }

                        name="country"
                    />
                </div>
                <div>
                    <span>Address</span> <input type="text"
                        value={ address }
                        onChange={ ( e ) => setAddress   ( e.target.value ) }

                        name="address"
                    />
                </div>
                <div>
                    <span>Customet_ID</span> <input type="text"
                        value={ customerID }
                        onChange={ ( e ) => setCustomerID( e.target.value ) }

                        name="cus_id"
                    />
                </div>
                <div
                >
                    <span>User_ID</span> <input type="text"
                        value={ userID }
                        onChange={ ( e ) => setUserID( e.target.value ) }
                        name="user_id"
                    />
                </div>

            </div>



            <div
                className="d-flex justify-content-center mt-2"
            >
                <div>
                    <button
                        style={ { marginRight: '10px' } }
                        onClick={ addUser }
                        className="btn btn-primary btn-sm">Add User</button>
                </div>
            </div>
            <hr />
            <table class="table table-bordered"
                style={ {
                    position: "relative",
                    left: 0,
                    right: 0,
                } }
            >
                <thead>
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

