import React, { Component } from 'react'

class ImageCard extends Component {
  // requires 0 space until loaded
  state = { spans: 0 }
  imageRef = React.createRef()

  // reach into DOM for image height
  /// componentDidMount only gets called after render
  // delay on getting clientHeight, need to refactor this so don't access height until it is available, we are trying to get the image BEFORE it has downloaded from unsplash. Add an event listener. Load event means image successfully downloaded, so an get height.
  // 2nd arg is callback
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  // setSpans because it takes grid-row-end, to get no on spns required, height divided by the row height, plus one for part row, rounded up. Math.ceil to cap its value.
  setSpans = () => {
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10 + 1)
    // then set it on our state
    this.setState({ spans })
  }

  render() {
    // destructure
    const { description, urls } = this.props.image

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}

export default ImageCard
// assuming our 'image' object is going to be passed to the ImageCard as a prop.
// Go to ImageList and use this ImageCard inside our list.
