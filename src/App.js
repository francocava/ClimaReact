import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: {},
      forecast: [],
      location: {},
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=Buenos+Aires,Argentina&key=${process.env.REACT_APP_API_KEY}&days=7`
    )
      .then(response => response.json())
      .then(jsonData => {
        const current = jsonData.data.shift();
        const forecast = jsonData.data;
        const location = {
          city_name: jsonData.city_name,
          country_code: jsonData.country_code,
          state_code: jsonData.state_code
        };
        this.setState({ current, forecast, location, isLoaded: true });
      });
  }

  render() {
    const { location, current, forecast, isLoaded } = this.state
    return isLoaded ? (
      <div className="App">
        <div className="container">
          <div className="top">
            <img
              src={require(`./icons/${current.weather.icon}.png`)}
              alt="Clima principal"
              className="image"
            />
            <p className="temp">{current.temp} °C</p>
            <h4 className="city">
              {location.city_name}, {location.state_code}, {location.country_code}
            </h4>
            <div className="temphr">
              Max: {current.max_temp} °C, Min: {current.min_temp} °C, H: {current.rh} %
            </div>
          </div>
          <div className="bottom">
            <div className="card">
              <h5>Lunes</h5>
              <h6>2018-09-26</h6>
              <img src={logo} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Martes</h5>
              <h6>2018-09-27</h6>
              <img src={logo} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Miércoles</h5>
              <h6>2018-09-28</h6>
              <img src={logo} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Jueves</h5>
              <h6>2018-09-29</h6>
              <img src={logo} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Viernes</h5>
              <h6>2018-09-30</h6>
              <img src={logo} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
            <div className="card">
              <h5>Sábado</h5>
              <h6>2018-10-01</h6>
              <img src={logo} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  26
                </p>
                <p>
                  <span className="tempmin" />
                  15
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="App">Cargando...</div>
    )
  }
}

export default App