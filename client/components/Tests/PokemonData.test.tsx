// @vitest-environment jsdom
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react/pure'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import router from '../../router'

beforeEach(cleanup)
expect.extend(matchers)

describe('<PokedexData />', () => {
  it('Renders an image on the page', () => {
    // ARRANGE
    const routes = createMemoryRouter(router.routes, {
      initialEntries: ['/pokedex/Charmander'],
    })

    // ACT
    render(<RouterProvider router={routes} />)
    const pokemonImages = screen.getByRole('img')

    // ASSERT
    expect(pokemonImages).toBeVisible
  })
})

describe('<PokedexData />', () => {
  it('Renders a heading on the page', () => {
    // ARRANGE
    const routes = createMemoryRouter(router.routes, {
      initialEntries: ['/pokedex/Charmander'],
    })

    // ACT
    render(<RouterProvider router={routes} />)
    const pokemonHeading = screen.getByAltText('Charmander')
    // ASSERT
    expect(pokemonHeading).toBeVisible
  })
})
