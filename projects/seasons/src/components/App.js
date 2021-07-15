import React, { Component } from 'react'

import './App.css'

// default state value to null for as yet undetermined number
class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  }
  // requires 2 fn callbacks
  // will be called frequently so don't want it in render method
  position = window.navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        lat: position.coords.latitude
      })
    },
    (err) => {
      this.setState({ errorMessage: err.message })
    }
  )
  componentDidMount() {
    console.log('my component rendered to the screen, mounted')
  }
  componentDidUpdate() {
    console.log('my component was just updated - it rerendered!')
  }

  render() {
    if (this.state.errrorMessage && !this.state.lat) {
      return <h2>Error: {this.state.errorMessage}</h2>
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <h2> Latitude: {this.state.lat} </h2>
    }

    return <h2>Loading...</h2>
  }
}

export default App

/*
Geolocation API in browser
get users current location

lattitude will tell you which hemisphere

// requires 2 fn callbacks, to give position, the first arg is going to be a fn callback that gets called any time this get or fn successfully gets the users position. Referred to as the 'success callback' followed by 2nd arg, failure callback, if not able to determine users physical location.

component needs to rerender itself with the new geolocation info, which we have had to wait for, so needs to be a class.


*/
