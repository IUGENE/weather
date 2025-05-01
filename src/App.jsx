"use client"

import { useState, useEffect } from "react"


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import SearchBar from './components/SearchBar'
import Container1 from './components/Container1'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState("Kolkata") // Default location

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`
      const response = await fetch(url)
      const data = await response.json()
      setWeatherData(data)
      console.log(data)
      setLocation(city)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchWeather(location)
  }, [])

  return (
    <>
      <Container1>
        <Container weatherData={weatherData}>
          <SearchBar onSearch={fetchWeather} />
        </Container>
      </Container1>
    </>
  )
}

export default App
