import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default function AddCustomer () {
    const history = useHistory();
    const initialFormData = Object.freeze( {
        email: '',
        username: '',
        age: '',
        phone: '',
        country: '',
    } );
    const [ formData, updateFormData ] = useState( initialFormData );
    const handleChange = ( e ) => {
        updateFormData( {
            ...formData,
            [ e.target.name ]: e.target.value,
        } );
    };
    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( formData );

        axios
            .post( `customers/register-customers/`, {
                email: formData.email,
                user_name: formData.username,
                age: formData.age,
                phone: formData.phone,
                country: formData.country,
            } )
            .then( ( res ) => {
                history.push( '/' );
                console.log( res );
                console.log( res.data );
            } );
    };

    return (
        <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Email address</label>
                <input type="email"
                    name="email"
                    className="form-control"
                    onChange={ handleChange }
                    placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text"
                    name="username"
                    onChange={ handleChange }
                    className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="text"
                    name="age"
                    onChange={ handleChange }
                    className="form-control" placeholder="Enter Age" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="number"
                    name="phone"
                    onChange={ handleChange }
                    className="form-control" placeholder="Enter Phone" />
            </div>
            <div className="form-group">
                <label>Country</label>
                <input type="text"
                    name="country"
                    onChange={ handleChange }
                    className="form-control" placeholder="Enter Country" />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-2"
                onClick={ handleSubmit }
            >Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to='/'>sign in?</Link>
            </p>
        </form>
    );
}