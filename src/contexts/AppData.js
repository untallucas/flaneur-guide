import React from 'react'

const AppData = React.createContext({ })
const CityDataEndpoint = process.env.REACT_APP_CITY_ENDPOINT
const TaxonomiesDataEndpoint = process.env.REACT_APP_TAXONOMIES_ENDPOINT
const SpotsDataEndpoint = process.env.REACT_APP_SPOTS_ENDPOINT

class AppDataProvider extends React.Component {
  state = {
    city: null,
    taxonomies: null,
    spots: null
  }

  fetchCityData() {
    const url = CityDataEndpoint; // 'https://notion-api.splitbee.io/v1/table/f4b196daa2b0472a89da476454a7227c?v=3496157f3ecd4b8cae25881d7963ca56'
    fetch(url)
      .then(cityResponse => cityResponse.json())
      .then(getCityData =>
        this.setState({
          city: getCityData
        }),
      )
  }

  fetchTaxonomiesData() {
    const url = TaxonomiesDataEndpoint; // 'https://notion-api.splitbee.io/v1/table/fa802c44459d4c7c902ada4cde30fed3?v=025e59130a404965bdd4854504da64b8'
    fetch(url)
      .then(taxonomiesResponse => taxonomiesResponse.json())
      .then(getTaxonomiesData =>
        this.setState({
          taxonomies: getTaxonomiesData.filter(taxonomy => taxonomy.published === 1)
        }),
      )
  }

  fetchSpotsData() {
    const url = SpotsDataEndpoint; // 'https://notion-api.splitbee.io/v1/table/06a53a97c7704fac82906509da256483?v=68cac7916d3f43a08f824ea21fda8fbf'
    fetch(url)
      .then(spotsResponse => spotsResponse.json())
      .then(getSpotsData =>
        this.setState({
          spots: getSpotsData.filter(spot => spot.published === 1)
        })
      )
  }

  componentDidMount() {
    this.fetchCityData()
    this.fetchTaxonomiesData()
    this.fetchSpotsData()
  }

  render() {
    const { children } = this.props
    return (
      <AppData.Provider value={{ city: this.state.city, spots: this.state.spots, taxonomies: this.state.taxonomies }}>
        { children }
      </AppData.Provider>
    )
  }
}

export default AppData
export { AppDataProvider }
