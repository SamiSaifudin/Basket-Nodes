import '../Styles/Details.css';
import axios from "axios";
import { useGamesContext } from '../hooks/UseGamesContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function GameDetails ({game}) {
    const { dispatch } = useGamesContext();

    const handleClick = async () => {
        axios.delete(`http://localhost:4000/BasketNodes/games/${game._id}`)
            .then(response => {
                dispatch({type: 'DELETE_GAME', payload: response.data})
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert('An error occurred while making the request.');
            }
        });
    }

    return (
        <div className="game-container">
            <h4>{game.title}</h4>
            <p><strong>Points:</strong> {game.points}</p>
            <p><strong>Rebounds:</strong> {game.rebounds}</p>
            <p><strong>Assists:</strong> {game.assists}</p>
            <p><strong>FG%:</strong> {game.fg}</p>
            <p><strong>{formatDistanceToNow(new Date(game.createdAt), { addSuffix: true })}</strong></p>
            <button className='delete-button' onClick={handleClick}>X</button>
        </div>
    );

}

export default GameDetails