// import { Link } from 'react-router-dom'
import data from '../../data/pokedex'

function TypesList() {
  return (
    <div>
      <h2>Types</h2>
      <ul>
        {TypeEntries()}
      </ul>
    </div>
  )
}


function TypeEntries() {
  const pokemonTypes = Object.keys(data)
  return (
    <li>
      {pokemonTypes.map((pokemonType: string) => (
        <li key={pokemonType}>{pokemonType}</li>
      ))}
    </li>
  )
}




export default TypesList
