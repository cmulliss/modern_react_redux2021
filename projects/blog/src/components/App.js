import './App.css'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

import faker from 'faker'
faker.seed(234567)

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail author='sam' currentTime={new Date().toLocaleTimeString()} comment='comment 1' avatar={faker.image.avatar()} today={new Date().toLocaleDateString()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='mot' currentTime={new Date().toLocaleTimeString()} comment='comment 2' avatar={faker.image.avatar()} today={new Date().toLocaleDateString()} />
      </ApprovalCard>
    </div>
  )
}

export default App

// fakerjs for fake data for projects, images in this case
// npm i faker
// bitbucket

// avatar={faker.image.avatar()} is going to generate a new link to an image and assign it to the avatar prop.
/*
const today = new Date().toLocaleDateString()
...
return today

const currentTime = new Date()).toLocaleTimeString()
...
return currentTime
*/
