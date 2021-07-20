import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    console.log(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='Image Search'>Image Search</label>
            <input type='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

// class based as needs to make us of state
// callback  passed to event handler, onChange={this.onInputChange}
// or can use anonymous inline fn
// onClick={() => console.log('input was clicked')}

// controlled form elements
// new prop, value
// value={this.state.term}
// setState to get new value from state
// onChange={(e) => this.setState({ term: e.target.value })}

/*
1. user types in input

2. callback gets invoked

3. we call setState with the new value
(we pull the change in that input out of the event object, by referencing e.target.value, then we update the state on our component with the new value )

4. component rerenders

5. Input is told what it's value is (coming from state) overwrites whatever text is already inside the input

Another advantage of controlled components:
Can also force capitalisation etc
this.setState({ term: e.target.value.toLocaleUpperCase() })}

Preventing default
<form onSubmit={(e) => e.preventDefault()} className='ui form'> or
 <form onSubmit={(e) => this.onFormSubmit(e)}
*/
