import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { darkTheme } from "./components/styled/theme/Dark"
import { lightTheme } from "./components/styled/theme/Light"
import GlobalStyles from "./components/styled/Global"
import Home from "./components/Home"

const App = () => {

  const [theme, setTheme] = useState(false)

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App