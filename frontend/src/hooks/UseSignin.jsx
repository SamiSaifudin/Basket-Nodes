import { useState } from 'react'
import { useAuthContext } from './UseAuthContext'
import axios from "axios"

export const UseSignin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
  
    const signin = async (username, password) => {
        setIsLoading(true)
        setError(null)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post("http://localhost:4000/BasketNodes/player/signin", JSON.stringify({username, password}), config)
            .then(response => {
            localStorage.setItem('player', JSON.stringify(response.data))
            dispatch({type: 'SIGNIN', payload: response.data})
            setIsLoading(false)
        })
        .catch(error => {
            setIsLoading(false)
            setError(error)
            console.error('Error making POST request:', error);
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert('An error occurred while making the request.');
            }
        });
    }
  
    return { signin, isLoading, error }
}