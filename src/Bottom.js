import React from 'react'
import Card from './Card'

const Bottom = props => {
  const { forecast } = props
  return (
    <div className="bottom">
      {forecast.map(dia => {
        return <Card dia={dia} key={dia.valid_date} />
      })}
    </div>
  )
}

export default Bottom