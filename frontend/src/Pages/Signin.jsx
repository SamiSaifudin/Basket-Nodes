import React, { useState } from 'react';
import '../Styles/Authentication.css';
import { UseSignin } from '../hooks/UseSignin';
import Navbar from '../Components/Navbar';

function Signin(){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {signin, error, isLoading} = UseSignin() 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signin(username.trim(), password)
    };

    return (
        <>
            <div className='Form-Container'>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>

        </>
        
    );
}

export default Signin