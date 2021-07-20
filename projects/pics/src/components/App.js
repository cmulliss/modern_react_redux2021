import React, { Component } from 'react'

import './App.css'
import SearchBar from './SearchBar'
class App extends Component {
  onSearchSubmit = (term) => {
    console.log('term', term)
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}
export default App
