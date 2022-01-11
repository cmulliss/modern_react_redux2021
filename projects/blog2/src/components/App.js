import './App.css'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

import faker from 'faker'

faker.seed(234567)

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail author='Sam' comment='Hello' avatar={faker.image.image()} />
      </ApprovalCard>

      <CommentDetail author='Susie' comment='More content' avatar={faker.image.image()} />
      <CommentDetail author='Joe' comment='Nice weather' avatar={faker.image.image()} />
    </div>
  )
}

export default App

// fakerjs for fake data for projects, images in this case
// updated faker use:
// npm install faker@5.5.3
// <img alt="avatar" src={faker.image.image()} />
// bitbucket

// avatar={faker.image.avatar()} is going to generate a new link to an image and assign it to the avatar prop.
/*
const today = new Date().toLocaleDateString()
...
return today

const currentTime = new Date().toLocaleTimeString()
...
return currentTime
*/
