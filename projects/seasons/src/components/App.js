import React from 'react'

import './App.css'

const App = () => {
  // requires 2 fn callbacks, to give position, the first arg is going to be a fn callback that gets called any time this get or fn successfully gets the users position. Referred to as the 'success callback' followed by 2nd arg, failure callback, if not able to determine users physical location.
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  )

  return (
    <div className='App'>
      <h1>App</h1>
    </div>
  )
}

export default App

/*
Geolocation API in browser
get users current location

lattitude will tell you which hemisphere



*/
