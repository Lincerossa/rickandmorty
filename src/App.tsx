import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import ApiProvider from './ApiProvider'
import Routes from './Routes'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApiProvider>
          <Routes />
        </ApiProvider>
      </ThemeProvider>
    </>
  )
}

export default App
