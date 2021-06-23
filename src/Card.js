import React from 'react'

const semana = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
]

const getWeekDay = fecha => {
  return semana[new Date(fecha).getDay()]
}

const Card = props => {
  const { dia } = props
  return (
    <div className="card">
      <h5>{getWeekDay(dia.datetime)}</h5>
      <h6>{dia.valid_date}</h6>
      <img
        src={require(`./icons/${dia.weather.icon}.png`)}
        alt="Clima diario"
        className="imagebottom"
      />
      <div className="minmax">
        <p>
          <span className="tempmax" />
          {parseInt(dia.max_temp)}
        </p>
        <p>
          <span className="tempmin" />
          {parseInt(dia.min_temp)}
        </p>
      </div>
    </div>
  )
}

export default Card