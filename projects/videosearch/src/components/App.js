import React, { Component } from 'react'

import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

class App extends Component {
  state = {
    videos: []
  }
  // callback, called with some search term string, add as prop below.
  // our list of videos contained in response.data.items, take this list and put on state.
  onTermSubmit = async (term) => {
    console.log(term)
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar callParentSubmit={this.onTermSubmit} />I have {this.state.videos.length} videos
        {/* videos prop, is a reference to the [] we fetch on calling onTermSubmit */}
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App

// need to add a callback method to our class App, that will be called any time someone submits the SearchBar form.
/*
that is an example of how a child(SearchBar) can communicate to a parent(App)
so here's the workflow
------INSIDE APP
1 we create a method(onTermSubmit) on the app component to make the api request
2 we pass that method to the SearchBar as a prop named onFormSubmit
------INSIDE SEARCHBAR
1 we create a method to execute the prop
2 we create a form and tell it to execute that method when the user submits the form(by pressing enter)
3 when the form gets submitted it will actually call that method so that the parent can make the request

to get rid of the confusion i suggest you rename the prop and set it as "callParentSubmit"

like this <SearchBar callParentSubmit={this.onTermSubmit} /> then modify the onFormsubmit method (in the SearchBar component) like this

onFormSubmit = (event)=>{
 event.preventDefault();
this.props.callParentSubmit(this.state.term);

and this line:
this.props.callParentSubmit(this.state.term)
passes the term to the
onTermSubmit = async (term) Function
}
*/
