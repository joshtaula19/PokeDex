import { useParams } from 'react-router-dom'
import GenerationData from '../../data/data'

const PokemonData = () => {
  const { code } = useParams()
  // I've set up the basic params for this but you can change it if you want to
  // If your confused just let me know ill help :))
  const pokemon = GenerationData.find((pokemon) => pokemon.code === code)

  if (!pokemon) {
    return <div>Pokemon not found</div>
  }

  return (
    <div>
      {pokemon.image}
      {pokemon.name}
      {pokemon.type}
      {pokemon.abilities}
      {pokemon.evolutions}
    </div>
  )
}

export default PokemonData
