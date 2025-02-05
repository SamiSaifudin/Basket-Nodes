import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { player: action.payload }
    case 'SIGNOUT':
      return { player: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    player: null
  })

  useEffect(() => {
    const player = JSON.parse(localStorage.getItem('player'))

    if (player) {
      dispatch({ type: 'SIGNIN', payload: player }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}