import React, { createContext, useEffect, useState } from 'react'

//React Context Api setup

//create a context object

export const ThemeContext = createContext(false)



function ThemeProvider({ children }) {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const isToggle = localStorage.getItem('toggle') == 'true'
        setToggle(isToggle)
    }, [])

    const toggleFunction = () => {
        setToggle(!toggle)
        localStorage.setItem('toggle', !toggle)
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