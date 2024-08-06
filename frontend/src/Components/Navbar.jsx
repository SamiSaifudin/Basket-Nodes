import React from 'react'
import { UseSignout } from '../hooks/UseSignout'
import { useAuthContext } from '../hooks/UseAuthContext'

function Navbar(){

    const {signout} = UseSignout()
    const { player } = useAuthContext()

    const handleClick = () => {
        signout()
    }

    return (
        <header>
            <div className="nav-container">
                <h2><span className="highlight">BasketNodes</span></h2> 
                {player && (
                    <div>
                        <span>{player.username}</span>
                        <button onClick={handleClick}>Sign Out</button>
                    </div>
                )}
                {!player && (
                    <button onClick={handleClick}>Sign Out</button>
                )}
            </div>
        </header>
    );
}

export default Navbar