import React from "react"




const PokemonRow = ({ pokemon, getSelectedPokemon }) => {
    return (
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
            <td><button onClick={() => getSelectedPokemon(pokemon)} >More Information</button></td>
        </tr>

    )
}

export default PokemonRow