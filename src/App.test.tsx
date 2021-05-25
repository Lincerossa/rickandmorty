import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

window.scrollTo = jest.fn()

test('/', () => {
  render(<App />)
  const linkElement = screen.queryAllByText('RAM')
  expect(linkElement.length).toBe(0)
})
