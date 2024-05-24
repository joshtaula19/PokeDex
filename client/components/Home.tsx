import { Link } from 'react-router-dom'
import '../Home.css'

function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <h1>
            <span className="poki">Poké</span>
            <span className="dex">dex</span>
          </h1>
          <h2>By the Stack Smashers</h2>

          {/* The button below should take the user who clicks it to the PokedexList.tsx component*/}
          <Link to="/pokedex">
            <button className="pokemonButton">Pokemon Database</button>
          </Link>
        </div>
        <div className="imageBox">
          <img
            id="pika"
            src="https://wallpapers-clan.com/wp-content/uploads/2024/04/eevee-sleeping-in-flowers-pokemon-preview-desktop-wallpaper.jpg"
            alt=""
          />
          <img
            id="ash"
            src="https://i.pinimg.com/736x/28/7c/99/287c997f0a18cfef662d7c7168d3ebec.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home
