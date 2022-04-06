import React from 'react'
import SearchBox from './SearchBox'

export default function Input({ city, setCity, setLatLng }) {
  //clickedLast sets the value of the input to the results.name returned from weather API
  //clickedLast is set to true on click in the Map component

  //useEffect updates state only when the dependency is defined

  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_APIKEY}`,
    )
      .then((res) => res.json())
      .then((result) => {
        setLatLng([result[0].lat, result[0].lon])
      })
  }, [city])

  return (
    <div className="input">
      <h2>Enter a city below 👇</h2>
      <SearchBox setCity={setCity} />
    </div>
  )
}
