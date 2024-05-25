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

// test to check two things - that the images are rendering and that the number of them is correct

describe('<PokedexList />', () => {
  it('Renders the correct amount of Pokemon entries', () => {
    // ARRANGE
    const routes = createMemoryRouter(router.routes, {
      initialEntries: ['/pokedex']
    })

    // ACT
    render(<RouterProvider router={routes} />)
    const pokemonImages = screen.getAllByRole('img')

    // ASSERT
    expect(pokemonImages).toHaveLength(134)
  })


})