import React from 'react'

import VideoItem from './VideoItem'

// can destructure just 'videos' property out of props object
// props.videos. Prop on VideoItem of video currently iterating over.
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />
  })
  return (
    <div>
      <div className='ui relaxed divided list'>{renderedList}</div>
    </div>
  )
}

export default VideoList
// any time this component is rendered onto the screen it will have a prop of called props.videos
