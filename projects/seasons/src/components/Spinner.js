import React from 'react'

const SpinnerLoader = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  )
}

SpinnerLoader.defaultProps = {
    message: 'Loading...'
}
export default SpinnerLoader

// want to customise the spinner message
// using props to pass in this message, instead of Loading...

// if forget message prop, can use default props.
