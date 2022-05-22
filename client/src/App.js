import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { darkTheme } from "./components/styled/theme/Dark"
import { lightTheme } from "./components/styled/theme/Light"
import GlobalStyles from "./components/styled/Global"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { uploadZip } from "./services/unzip"

const App = () => {

  const [theme, setTheme] = useState(true)
  const [data, setData] = useState({})

  const toggleTheme = () => {
    setTheme(!theme)
  }

  const handleFileUpload = event => {

    if (event.target.files[0].type !== "application/zip") {
      window.alert("Must select a zip file!")
      return
    }

    uploadZip(event.target.files[0])
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home handleUpload={handleFileUpload} />} />
      </Routes>
      <Footer onToggleTheme={toggleTheme} otherTheme={theme ? "Light" : "Dark"} />
    </ThemeProvider>
  )
}

export default App