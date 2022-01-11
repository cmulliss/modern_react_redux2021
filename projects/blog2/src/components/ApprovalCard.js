import React from 'react'

const ApprovalCard = (props) => {
  console.log(props.children)
  return (
    <div className='ui card'>
      <div className='content'>Are you sure?</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Aprove</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard

//console.log('approvalcard, props.children:', props.children)
