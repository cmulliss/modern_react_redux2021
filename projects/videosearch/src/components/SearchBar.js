import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor='namedInput'>Video Search</label>
            <input id='namedInput' name='searchInput' type='text' />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
