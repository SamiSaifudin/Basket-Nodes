import '../Styles/Playerbase.css';
import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import GameDetails from '../Components/GameDetails';
import AddGame from '../Components/AddGame';
import axios from "axios";
import { useGamesContext } from '../hooks/UseGamesContext'

function Playerbase(){
    const {games, dispatch} = useGamesContext()

    useEffect(() => {
        const fetchGames = async () => {
            axios.get("http://localhost:4000/BasketNodes/games")
            .then(response => {
                dispatch({type: 'SET_GAMES', payload: response.data})
            })
            .catch(error => {
                console.error('Error making GET request:', error);

                // Check if there is a response and if it contains data
                if (error.response && error.response.data && error.response.data.error) {
                    alert(error.response.data.error);
                } else {
                    alert('An error occurred while making the request.');
                }
            });
        }
        
        fetchGames();
    }, [])

    return (
        <>  
            <Navbar/>

            <div className='player-container'> 

                <div className='games'>
                    {games && games.map((game) => (
                        <GameDetails key={game._id} game = {game}/>
                    ))}
                </div>
                <AddGame/>

            </div>
            
        </>
    );
}

export default Playerbase