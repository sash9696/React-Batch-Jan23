import React, { createContext, useContext } from 'react'
import './App.css'

//React context api

//prop drilling
// App //data
//   User //props
//     user1 //props
//     user2 //props
//       comp1
//       comp2 //props
//   Product
//    product1
//    product2
//      product3
//      priduct4
//        comp1
//        comp2


// ex-

// App
//   User
//     User1
//       User2
//         User3



// function User({ name }) {
//   return <User2 name={name} />
// }

// function User2({ name }) {

//   return <User3 name={name} />

// }

// function User3({ name }) {

//   return <h1> {name} </h1>
// }

const NameContext = createContext()

console.log(NameContext)



function User() {
    return <User2 />
}

function User2() {

    return <User3 />

}

function User3() {

    const name = useContext(NameContext)

    return (
        // <NameContext.Consumer>
        //   {(value) => <h1>{value}</h1>}
        // </NameContext.Consumer>
        <h1>{name}</h1>
    )
}


//React Context Api
// create a context object


// Provider (it gives access to  the data across component tree) and Consumer (consume data inside of the component)


function App() {
    return (
        <NameContext.Provider value='James Bond'  >
            <div>
                <User />
            </div>
        </NameContext.Provider>

    )
}

export default App