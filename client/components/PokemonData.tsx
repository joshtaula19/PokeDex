import { useParams } from 'react-router-dom'
import GenerationData from '../../data/data'

const PokemonData = () => {
  const { name } = useParams()
  // I've set up the basic params for this but you can change it if you want to
  // If your confused just let me know ill help :))
  const pokemon = GenerationData.find((pokemon) => pokemon.name === name)

  if (!pokemon) {
    return <div>Pokemon not found</div>
  }

  return (
    <div>
      {/* I have added tag to the data below just so that I could be able to see the page content and ensure routing was working correctly. Feel free to change to use tags that are linked to CSS  */}
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.type}</p>
      <p>Abilities: {pokemon.abilities.join(', ')}</p>
      <p>Evolutions: {pokemon.evolutions.join(', ')}</p>
    </div>
  )
}

export default PokemonData
