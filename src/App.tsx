import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>Hello</div>
      </ThemeProvider>
    </div>
  )
}

export default App
