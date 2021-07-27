import React, { Component } from 'react'
import unsplash from '../api/unsplash'

import './App.css'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
class App extends Component {
  // expect to get images property in state, so default to []
  state = {
    images: []
  }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 20 }
    })

    this.setState({ images: response.data.results })
    // can see response.data.results contains the list of images
    // when we get the response we want to set it on our component state, which will casue our component to render and we can print out the number of images.
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} images */}
        {/* new prop 'images' from state, will show as props in ImageList */}
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
export default App

// In App, we passed in onSearchSubmit to the onSubmit prop, so this is the fn that is going to be invoked.
//I wouldn't picture it as the child passing the data back to the parent, rather the child calls the function defined in the parent with the data that the child has.

/* The parent creates a function that takes in parameters and passes a reference to that function as a prop to the child. Then the child calls the function with the arguments passed in.

We are not really retrieving values from the child. We are passing the function that calls console.log as props and calling that props function inside the child, correct?
Correct, this is known as one way or uni-directional data flow. Parents pass state down  to the children as props and the children can only communicate via callback functions that were passed as props.

https://unsplash.com/oauth/applications/

axios.get(1st arg the address, 2nd arg object with options)

promises, can use .then 
then((response) => {
        console.log('response', response.data.results)
        // can see response.data.results contains the list of images
or async await
async in front of onSearchSubmit fn, and await in front of network request. if using => move async to in front of term.
Assign new variable 'response'
*/
