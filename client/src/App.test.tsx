import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import { Home } from './pages'

const home = <BrowserRouter><Home /></BrowserRouter>

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(home)
    const h1 = await screen.queryByText('GPT-OMNI')

    expect(h1).not.toBeNull()
  })
})