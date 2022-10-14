import React from 'react';
import './Login.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (formData.username === "") {
            alert("Mohon isi username")
            return false;
        }
        if (formData.password === "") {
            alert("Mohon isi password")
            return false;
        }
    }
    
    return (
        <div className='login'>
            <div className="form">
                <h1 className='px-3 py-3'>Login</h1>
                <form className='px-3 py-4' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="">Username</label>
                        <input
                        type="text"
                        className='form-control'
                        name='username'
                        value={formData.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input
                        type="password"
                        className='form-control'
                        name='password'
                        value={formData.username}
                        />
                    </div>
                    <div className='sub-btn'>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;