import axios from "axios"
import React, { useState } from 'react'
import { useAuthContext } from '../hooks/UseAuthContext'
import { useGamesContext } from '../hooks/UseGamesContext'

function AddGame(){
    const { dispatch } = useGamesContext()
    const [title, setTitle] = useState('')
    const [points, setPoints] = useState('')
    const [rebounds, setRebounds] = useState('')
    const [assists, setAssists] = useState('')
    const [shotsTaken, setShotsTaken] = useState('')
    const [shotsMade, setShotsMade] = useState('')
    const { player } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();

        let shotsMadeInt = Number(shotsMade)
        let shotsTakenInt = Number(shotsTaken)

        if (shotsMadeInt > shotsTakenInt) {
            alert("Error: Shots Made can't be greater than Shots Taken")
            return; 
        }

        const game = {
            title: title.trim(),
            points: points,
            rebounds: rebounds,
            assists: assists,
            fg: (shotsMadeInt === 0 && shotsTakenInt === 0) ? 0: ((shotsMadeInt / shotsTakenInt) * 100).toFixed(2)
        };

        const config = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${player.token}`
            }
        };

        axios.post(`${import.meta.env.VITE_APP_API_URL}/games`, JSON.stringify(game), config)
            .then(response => {
            dispatch({type: 'CREATE_GAME', payload: response.data})
            setTitle('')
            setPoints('')
            setRebounds('')
            setAssists('')
            setShotsTaken('')
            setShotsMade('')
        })
        .catch(error => {
            console.error('Error making POST request:', error)
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert('An error occurred while making the request.')
            }
        });
    };

    return (
        <>
            <div className='form-2-Container'> 
                <h2><span className="highlight">Add Game</span></h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group-2">
                        <label>Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength="15"
                                required
                            />
                    </div>

                    <div className="form-group-2">
                        <label>Points</label>
                            <input
                                type="number"
                                id="points"
                                value={points}
                                onChange={(e) => setPoints(e.target.value)}
                                required
                            />
                    </div>

                    <div className="form-group-2">
                        <label >Rebounds</label>
                            <input
                                type="number"
                                id="rebounds"
                                value={rebounds}
                                onChange={(e) => setRebounds(e.target.value)}
                                required
                            />
                    </div>

                    <div className="form-group-2">
                        <label>Assists</label>
                            <input
                                type="number"
                                id="assists"
                                value={assists}
                                onChange={(e) => setAssists(e.target.value)}
                                required
                            />
                    </div>

                    <div className="form-group-2">
                        <label>Shots Made</label>
                            <input
                                type="number"
                                id="shotsMade"
                                value={shotsMade}
                                onChange={(e) => setShotsMade(e.target.value)}
                                required
                            />
                    </div>

                    <div className="form-group-2">
                        <label>Shots Taken</label>
                            <input
                                type="number"
                                id="shotsTaken"
                                value={shotsTaken}
                                onChange={(e) => setShotsTaken(e.target.value)}
                                required
                            />
                    </div>
                            
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        </>
    );
}

export default AddGame