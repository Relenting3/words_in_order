import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {

  const [lifes, setLifes] = useState(5)
  const [isGameFinished, setIsGameFinished] = useState(null)
  const [playingMusic, setPlayingMusic] = useState(false)

	const value = {
    lifes,
    isGameFinished,
    playingMusic,
    handleLifes: (lifes) => {
      setLifes(prev => prev = lifes)
    },
    handleIsGameFinished: (state, msg) => {
      if(state === 'reset') {
        setLifes(prev => prev = 5)
        return setIsGameFinished(prev => prev = null)
      }
      setIsGameFinished(prev => prev = {state, msg})
    },
    toggleMusic: () => {
      setPlayingMusic(prev => !prev)
    }
	}

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export default {
	Provider,
	Consumer: Context.Consumer
}
