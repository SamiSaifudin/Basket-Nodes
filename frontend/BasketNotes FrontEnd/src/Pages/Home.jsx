import React from 'react';
import { Link } from 'react-router-dom';

function Home(){

    return (
        <>
            <h1>Welcome to <span className="highlight">BasketNodes</span></h1> 
            <p>An app that will help <span className="highlight">Basketball</span> players around the world keep track of their stats.</p>
            <button><Link to="/signin">Sign In</Link></button> <button><Link to="/signup">Sign Up</Link></button>
        </>
    );
}

export default Home