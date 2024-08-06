import { useAuthContext } from "./UseAuthContext"
import { useGamesContext } from "./UseGamesContext"

export const UseSignout = () => {

    const { dispatch: playerDispatch } = useAuthContext()

    const { dispatch: gamesDispatch } = useGamesContext()

    const signout = () => {
        localStorage.removeItem('player')
        playerDispatch({type: 'SIGNOUT'})
        gamesDispatch({type: 'SET_GAMES', payload: null})
    }

    return { signout }
}