import React from 'react'

// import faker from 'faker'
// faker.seed(234567)

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'> {props.currentTime}</span>
        </div>
        <div className='text'>{props.comment}</div>
        {props.today}
      </div>
    </div>
  )
}

export default CommentDetail
