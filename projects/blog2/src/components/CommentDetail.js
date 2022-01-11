import React from 'react'
import ApprovalCard from './ApprovalCard'

const CommentDetail = (props) => {
  console.log(props)
  const today = new Date().toLocaleDateString()

  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' width='50' height='50' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='content'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Posted: {today}</span>
        </div>
        <div className='text'>{props.comment}</div>
      </div>
    </div>
  )
}

export default CommentDetail

// {props.currentTime}
