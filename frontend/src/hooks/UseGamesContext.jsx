import { GamesContext } from '../context/GameContext.jsx'
import { useContext } from 'react'

export const useGamesContext = () => {
    const context = useContext(GamesContext)

    if (!context){
        throw Error("React Context Error")
    }
    return context
}


