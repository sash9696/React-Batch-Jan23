import React, { createContext, useState } from 'react'

//React Context Api setup

//create a context object

export const ThemeContext = createContext(false)



function ThemeProvider({ children }) {

    const [toggle, setToggle] = useState(false)

    const toggleFunction = () => {
        setToggle(!toggle)
    }

    // console.log(children)

    return (
        <ThemeContext.Provider value={{
            toggle, toggleFunction
        }} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider