import React, { useState } from 'react'
import './App.css'
import pokemon from './pokemon.json'
import PropTypes from 'prop-types'




const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    special_attack: PropTypes.number.isRequired,
    special_defense: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  })


})

const PokemonRow = ({ pokemon, getSelectedPokemon }) => {


  return (

    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td><button onClick={() => getSelectedPokemon(pokemon)} >More Information</button></td>
    </tr>


  )
}

PokemonRow.propTypes = {
  pokemon: PokemonType
}

const PokemonInfo = (props) => {
  console.log('props', props)
  return (
    <div>
      <h1>Pokemon Info</h1>
    </div>
  )
}



function App() {

  //two rules of hooks
  //it should be on top level management
  //it should be inside react function
  const [filter, setFilter] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log('selectedPokemon', selectedPokemon)

  console.log(filter)

  const searchPokemon = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1em'
    }} >
      <h1 className='title'>Pokemon Search</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: "80% 20%",
          gridColumnGap: '1rem'
        }}
      >
        <div>
          <input
            type='text'
            value={filter}
            onChange={searchPokemon}

          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>

              {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 20).map((pokemon) => (
                <PokemonRow
                  key={pokemon.id}
                  pokemon={pokemon}
                  getSelectedPokemon={(pokemon) => { setSelectedPokemon(pokemon) }}

                />
              )
              )}
              {/* {pokemon.filter(({ name: { english } }) => english.includes(filter)).slice(0, 20).map((pokemon) => (
                <PokemonRow key={pokemon.id} pokemon={pokemon} />
              )
              )} */}
            </tbody>
          </table>
        </div>

        <PokemonInfo {...selectedPokemon} />
      </div>

    </div>
  )
}

export default App