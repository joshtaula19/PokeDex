import { useParams } from 'react-router-dom'
import GenerationData from '../../data/data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../PokemonData.css'

const PokemonData = () => {
  const { code } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  // I've set up the basic params for this but you can change it if you want to
  // If your confused just let me know ill help :))
  const pokemon = GenerationData.find((pokemon) => pokemon.code === code)

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  if (!pokemon) {
    return <div>Pokemon not found</div>
  }

  if (isLoading) {
    return (
      <div className="gifContainer">
        <img
          className="pokeGif"
          src="https://cdn.discordapp.com/attachments/1234300885304348762/1243526211448340520/pokedex-gif2.gif?ex=6651cb88&is=66507a08&hm=3f902ba85c891d8efbec6c28e504a1e6eb3337b415b0ce74cce73ac1f115fcc9&"
          alt="Loading"
        />
      </div>
    )
  }

  return (
    <div>
      <div
        className="TopHeader"
        style={{
          backgroundImage: `url(/images/${pokemon.name.toLowerCase()}.jpg)`,
        }}
      >
        <div className="ImgContain">
          <div className="ButtonArea">
            <div className="ImgCard">
              <img
                className="PokemonImg"
                src={'/images/' + pokemon.name.toLowerCase() + '.jpg'}
                alt={pokemon.name}
              />
            </div>
            <div className="ButtonContain">
              <Link to={`/pokedex`}>
                <button className="GoBack">Go Back</button>
              </Link>
            </div>
          </div>
          <div className="Details">
            {' '}
            <h1>{pokemon.name}</h1>
            <h2>Type:</h2>
            <h3>{pokemon.type}</h3>
            <h2>Abilities:</h2>
            <h3>{pokemon.abilities.join(', ')}</h3>
            <h2>Evolutions:</h2>
            <h3>{pokemon.evolutions.join(', ')}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonData
