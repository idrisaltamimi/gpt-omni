// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { describe, it, expect, } from 'vitest'

import { Home } from './pages'

describe('Home', () => {
  it('renders the home page', async () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /GPT-OMNI/i })
    expect(heading).toBeInTheDocument()
  })

  // it('navigates to the about page', async () => {
  //   render(<Home />)
  //   const link = screen.getByRole('link', { name: /about/i })
  //   userEvent.click(link)
  //   const heading = await screen.findByRole('heading', { name: /about/i })
  //   expect(heading).toBeInTheDocument()
  // })

  // it('submits a contact form', async () => {
  //   render(<Home />)
  //   const nameInput = screen.getByLabelText('Name')
  //   const emailInput = screen.getByLabelText('Email')
  //   const messageInput = screen.getByLabelText('Message')
  //   const submitButton = screen.getByRole('button', { name: /submit/i })
  //   userEvent.type(nameInput, 'John Doe')
  //   userEvent.type(emailInput, 'johndoe@example.com')
  //   userEvent.type(messageInput, 'This is a test message.')
  //   userEvent.click(submitButton)
  //   const successMessage = await screen.findByText('Thank you for your message!')
  //   expect(successMessage).toBeInTheDocument()
  // })
})
