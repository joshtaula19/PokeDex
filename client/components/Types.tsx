import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import data from '../../data/pokedex'
import { Pokemon } from '../../data/pokedex'

function Types() {

  const { name: pokemonName } = useParams()

  const pokemonData = data[pokemonName || ""]

  if (pokemonData) {
    const pokemon = pokemonData.pokemons


    return (
      <>
        <div>
          <ul>
            {pokemon.map((pokemon: Pokemon) => (
              <li key={pokemon.code}>{pokemon.name}</li>
            ))}
          </ul>
        </div>

      </>
    )
  }
}

export default Types
