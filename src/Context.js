import React, {useState} from 'react'

export const Context = React.createContext(null)
export default function ContextProvider({children}) {

  const [displayValue, setDisplayValue] = useState(0)
  const [equalSignPressed, setEqualSignPressed] = useState(false)

  return (
    <Context.Provider value={{displayValue, setDisplayValue,
     equalSignPressed, setEqualSignPressed}} >
  
        {children}
  
      </Context.Provider>
  )
}