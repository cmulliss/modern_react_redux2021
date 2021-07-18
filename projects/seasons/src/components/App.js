import React, { Component } from 'react'

import './App.css'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

// default state value to null for as yet undetermined number
// state getting passed down as a props into SeasonDisplay
class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  }
  // requires 2 fn callbacks
  // will be called frequently so don't want it in render method
  // componentDidMount() place to do data loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude
        })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    // prop of 'message'for the spinner
    return <Spinner message='Please accept location request' />
  }
  // above helper method avoids conditionals in render method.
  render() {
    return <div className='border-red'>{this.renderContent()}</div>
  }
}

export default App

/*
Geolocation API in browser
get users current location

lattitude will tell you which hemisphere

// requires 2 fn callbacks, to give position, the first arg is going to be a fn callback that gets called any time this get or fn successfully gets the users position. Referred to as the 'success callback' followed by 2nd arg, failure callback, if not able to determine users physical location.

component needs to rerender itself with the new geolocation info, which we have had to wait for, so needs to be a class.

componentDidMount() {
    console.log('my component rendered to the screen, mounted')
  }
  componentDidUpdate() {
    console.log('my component was just updated - it rerendered!')
  }

  NB:
  we are taking a property from the state on the app component, and passing it as a prop down into the child, <SeasonDisplay/>

  Every time we call setState not only do we rerender the compoent, BUT also rerender any children too.

  or could do this above:

  render() {
    return (
      <div className="border red">
          {this.state.errorMessage && !this.state.lat &&
            <div>Error: {this.state.errorMessage}</div>
          }
          {!this.state.errorMessage && this.state.lat &&
            <div><SeasonDisplay lat={this.state.lat} /></div>
          }
          {!this.state.errorMessage && !this.state.lat &&
            <Spinner message="Please accept the location request." />
          }
      </div>
    );
  }

*/
