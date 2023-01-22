import React from "react";
import PropTypes from 'prop-types'
import PokemonRow from "../PokemonRow/PokemonRow";


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

PokemonRow.propTypes = {
    pokemon: PokemonType
}
function PokemonTable({ pokemon, filter, setSelectedPokemon }) {
    return (
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
    )
}

export default PokemonTable