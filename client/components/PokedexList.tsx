import { Link } from 'react-router-dom'
import GenerationData, { Generation } from '../../data/data'
import '../PokedexList.css'
import {useState} from 'react'

// Functions below control the filtering for the drop down menu/buttons :)) //
const PokedexList = () => {
  const [filteredPokemon, setFilteredPokemon] = useState<Generation[]>(GenerationData)

  const filterPokemon = (type: string) => {
    if (type === "All") {
      setFilteredPokemon(GenerationData)
    } else {
      const filtered = GenerationData.filter(pokemon => pokemon.type.includes(type))
      console.log(filtered)
      setFilteredPokemon(filtered)
    }
  };

  const displayAllPokemon = () => {
    setFilteredPokemon(GenerationData)
  }


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
        <div className="dropdown">
          <button className="dropbtn">Types of Pokémon</button>
          <div className="dropdown-content">
            <button className="allButton" onClick={displayAllPokemon}>All</button>
            <button className="typeButton" onClick={() => filterPokemon('Water')}>Water</button>
            <button className="typeButton" onClick={() => filterPokemon('Fire')}>Fire</button>
            <button className="typeButton" onClick={() => filterPokemon('Electric')}>Electric</button>
            <button className="typeButton" onClick={() => filterPokemon('Normal')}>Normal</button>
            <button className="typeButton" onClick={() => filterPokemon('Fighting')}>Fighting</button>
            <button className="typeButton" onClick={() => filterPokemon('Poison')}>Poison</button>
            <button className="typeButton" onClick={() => filterPokemon('Ground')}>Ground</button>
            <button className="typeButton" onClick={() => filterPokemon('Bug')}>Bug</button>
            <button className="typeButton" onClick={() => filterPokemon('Ghost')}>Ghost</button>
            <button className="typeButton" onClick={() => filterPokemon('Flying')}>Flying</button>
            <button className="typeButton" onClick={() => filterPokemon('Steel')}>Steel</button>
            <button className="typeButton" onClick={() => filterPokemon('Grass')}>Grass</button>
          </div>
        </div>

      </div>
      <div className="cardsContainer">
        {filteredPokemon.map((pokemon) => {
          return (
            <div key={pokemon.code}>
              {/* You can wrap the div: pokemonCard, in a router link so that the entire card is a link and when the user clicks on the card, it should take them to the PokemonData.tsx page of that pokemon they clicked */}
              {/* Something like we did for world wide routing:   <Link to={'/continent/' + name + '/' + country.code}> */}
              <Link to={`/pokedex/${pokemon.name}`}>
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
