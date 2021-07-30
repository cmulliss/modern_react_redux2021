import React, { Component } from 'react'

class SearchBar extends Component {
  // store in state, not DOM
  state = { term: '' }

  // take the values of the input out of the event object and assign it to our state.
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.callParentSubmit(this.state.term)
  }
  // to do, make sure we call callback from parent component

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input type='text' value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

// this.onInputChange is a callback fn which will be invoked when something changes. Passing this callback method that we are going to eventually create as a callback on the SearchBar class, then immediately define as method on class above. Called with an event object.
// could also do:
// onChange={e => this.setState({term: e.target.value})}
// need a callback handler for submitting the form too.
