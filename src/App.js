import { useEffect, useState } from 'react'
import './App.css'
import MyMap from './components/MyMap'
import Results from './components/Results'
import GeoCoder from './components/GeoCoder'

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [city, setCity] = useState('New York')
  const [results, setResults] = useState(null)
  const [latLng, setLatLng] = useState([40.71427, -74.00597])

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLng[0]}&lon=${latLng[1]}&appid=${process.env.REACT_APP_APIKEY}`,
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true)
            setResults(result)
          }
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [latLng])

  return (
    <>
      <div className="container">
        <GeoCoder setCity={setCity} city={city} setLatLng={setLatLng} />
        <Results isLoaded={isLoaded} results={results} error={error} />
        <>
          <div id="map">
            <MyMap setLatLng={setLatLng} latLng={latLng} />
          </div>
        </>
      </div>
    </>
  )
}
export default App
