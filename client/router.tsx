import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import PokedexList from './components/PokedexList'
import PokemonData from './components/PokemonData'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="pokedex" element={<PokedexList />} />
      <Route path="pokedex:code" element={<PokemonData />} />
    </Route>
  )
)

export default router