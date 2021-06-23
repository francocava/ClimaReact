import React, { Component } from 'react'
import Top from './Top'
import Bottom from './Bottom'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: {},
      forecast: [],
      location: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=Buenos+Aires,Argentina&key=${process.env.REACT_APP_API_KEY}&days=7`,
    )
      .then(response => response.json())
      .then(jsonData => {
        const current = jsonData.data.shift()
        const forecast = jsonData.data
        const location = {
          city_name: jsonData.city_name,
          country_code: jsonData.country_code,
          state_code: jsonData.state_code,
        }
        this.setState({ current, forecast, location, isLoaded: true })
      })
  }

  render() {
    const { location, current, forecast, isLoaded } = this.state
    return isLoaded ? (
      <div className="App">
        <div className="container">
          <Top current={current} location={location} />

          <Bottom forecast={forecast} />
        </div>
      </div>
    ) : (
      <div className="App">Loading...</div>
    )
  }
}

export default App