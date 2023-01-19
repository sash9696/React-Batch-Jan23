import React from 'react'
import './App.css'
import pokemon from './pokemon.json'

const PokemonRow = ({ pokemon }) => {
  // console.log(props.pokemon)
  return (

    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>


  )
}




function App() {
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1em'
    }} >
      <h1 className='title'>Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>

          {pokemon.map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App