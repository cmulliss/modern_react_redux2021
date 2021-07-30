import React from 'react'
import VideoList from './VideoList'
import './VideoItem.css'

// props object now contains a video property, with all the info about this particular video.
const VideoItem = ({ video }) => {
  return (
    <div className='video-item item'>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem

// check in network tab, filter XHR and preview
