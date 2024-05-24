import { Link } from 'react-router-dom'
import GenerationData from '../../data/data'
import '../PokedexList.css'

const PokedexList = () => {
  // const [Visible, setVisible] = useState(false)

  // const handleClick = () => {
  //   setVisible(true)
  // }

  return (
    <div className="listMain">
      <div className="listHeader">
        <h3>Select Pokemon to view details!</h3>
        {/* This button should take you back to the home component */}
        <Link to="/">
          <button className="homeButton">Home</button>
        </Link>
      </div>
      <div className="cardsContainer">
        {GenerationData.map((pokemon) => {
          return (
            <div key={pokemon.code}>
              {/* You can wrap the div: pokemonCard, in a router link so that the entire card is a link and when the user clicks on the card, it should take them to the PokemonData.tsx page of that pokemon they clicked */}
              {/* Something like we did for world wide routing:   <Link to={'/continent/' + name + '/' + country.code}> */}
              <Link to={`/pokedex/${pokemon.code}`}>
                <div className="pokemonCard">
                  <img
                    className="pokemonImages"
                    src={'/images/' + pokemon.name.toLowerCase() + '.jpg'}
                    alt="pokemon"
                  />
                </div>
                <h2 className="pokemonNames">{pokemon.name}</h2>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokedexList
