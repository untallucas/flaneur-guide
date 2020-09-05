import React from 'react'

const AppData = React.createContext({ })

class AppDataProvider extends React.Component {
  state = {
    taxonomiesData: null
  }

  componentDidMount() {
    const url = 'https://notion-api.splitbee.io/v1/table/fa802c44459d4c7c902ada4cde30fed3?v=025e59130a404965bdd4854504da64b8'
    fetch(url)
      .then(taxonomiesResponse => taxonomiesResponse.json())
      .then(getTaxonomiesData =>
        this.setState({
          taxonomiesData: getTaxonomiesData
        }),
      )
      .catch(taxonomiesError => this.setState({ taxonomiesError, taxonomiesLoading: false }))
  }

  render() {
    const { children } = this.props
    return (
      <AppData.Provider value={ this.state.taxonomiesData }>
        { children }
      </AppData.Provider>
    )
  }
}

export default AppData
export { AppDataProvider }
