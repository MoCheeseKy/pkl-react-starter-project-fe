import React from 'react';
import './Login.scss';
import { useState, useEffect } from 'react';

const Login = () => {
    function handleSubmit(e) {
        
    }
    
    return (
        <div className='login'>
            <div className="form">
                <h1 className='px-3 py-3'>Login</h1>
                <form className='px-3 py-4' action="">
                    <div className='form-group'>
                        <label htmlFor="">Username</label>
                        <input
                        type="text"
                        className='form-control'
                        name='username'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input
                        type="password"
                        className='form-control'
                        name='password'
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