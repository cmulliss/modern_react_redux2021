import './App.css'
import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'

class App extends Component {
  state = {
    lat: null
  }

  // geolocation doesn't want to be initialised in the render method, means that the instant the App component turns up on screen will attempt to to get the users current location
  // needs componentDidMount or cannot call setState on unmounted component
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setstate!!!!
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    )
  }

  render() {
    return (
      <div>
        <div>
          <div>Latitude: {this.state.lat} </div>
          <SeasonDisplay />
        </div>
      </div>
    )
  }
}
export default App

// geolocation, see MDN

// react functional components cannot be async

// when expecting a number on state, default to null
