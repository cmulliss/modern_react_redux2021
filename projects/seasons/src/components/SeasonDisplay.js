import React from 'react'

getSeason = () => {
    
}

const SeasonDisplay = (props) => {
  console.log(props.lat)
  return (
    <div>
      <h1>Seasons</h1>
      {props.lat}
    </div>
  )
}

export default SeasonDisplay
