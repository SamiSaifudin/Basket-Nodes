import '../Styles/Playerbase.css'
import React, { useEffect, useState } from "react"
import Navbar from '../Components/Navbar'
import GameDetails from '../Components/GameDetails'
import AddGame from '../Components/AddGame'
import axios from "axios"
import { useGamesContext } from '../hooks/UseGamesContext'
import { useAuthContext } from '../hooks/UseAuthContext'

function Playerbase(){
    const {games, dispatch} = useGamesContext()

    const { player } = useAuthContext()

    useEffect(() => {
        const fetchGames = async () => {

            const config = {
                headers: {
                  'Authorization': `Bearer ${player.token}`
                }
            };
            
            axios.get(`${import.meta.env.VITE_APP_API_URL}/games`, config)
            .then(response => {
                dispatch({type: 'SET_GAMES', payload: response.data})
            })
            .catch(error => {
                console.error('Error making GET request:', error);

                if (error.response && error.response.data && error.response.data.error) {
                    alert(error.response.data.error)
                } else {
                    alert('An error occurred while making the request.')
                }
            });
        }
        if (player){
            fetchGames()
        }
    }, [dispatch, player])

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