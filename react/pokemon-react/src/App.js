import React, { useEffect, useState } from 'react'
import './App.css'
// import pokemon from './pokemon.json'
import PokemonInfo from './components/PokemonInfo/PokemonInfo'
import PokemonSearch from './components/PokemonSearch/PokemonSearch'
import PokemonTable from './components/PokemonTable/PokemonTable'



function App() {

  console.log('app rendered')
  const [filter, setFilter] = useState('')
  const [pokemon, setPokemon] = useState([])


  // fetch("/my-app/pokemon.json")

  useEffect(() => {
    console.log('useeffect run')
    //this will run when the component mounts and only once
    fetch('pokemon.json')
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(function (error) { console.log(error) })

  }, [])



  //two rules of hooks
  //it should be on top level management
  //it should be inside react function
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  // console.log('selectedPokemon', selectedPokemon)



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

          <PokemonSearch filter={filter} setFilter={setFilter} />
          <PokemonTable pokemon={pokemon} filter={filter} setSelectedPokemon={setSelectedPokemon} />
        </div>


        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>

    </div>
  )
}

export default App