import React from 'react'

const Top = props => {
  const { current, location } = props
  return (
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
        Max: {current.max_temp} °C, Min: {current.min_temp} °C, H: {current.rh}{' '}
        %
      </div>
    </div>
  )
}

export default Top