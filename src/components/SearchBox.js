import Autocomplete from 'react-google-autocomplete'

const SearchBox = ({ setCity }) => {
  return (
    <>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLEAPIKEY}
        defaultValue={'New York City'}
        onPlaceSelected={(place) => {
          setCity(place.address_components[0].long_name)
        }}
      />
    </>
  )
}

export default SearchBox
