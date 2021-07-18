import React from 'react'

import './SeasonDisplay.css'

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  Winter: {
    text: "Brr, it's chilly",
    iconName: 'snowflake'
  }
}

// fn we call with the current latitude and month
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season] // {text, iconName}

  return (
    <div className={`season-display ${season} `}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  )
}

export default SeasonDisplay

// lat > 0, northern hemisphere, lat < 0, southern hemisphere
// divisive whether to put ternary expression into the jsx, or whether to put it in a separate constant called text, then call that.
