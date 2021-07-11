import './App.css'

import CommentDetail from './CommentDetail'

import faker from 'faker'
faker.seed(234567)

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
    </div>
  )
}

export default App

// fakerjs for fake data for projects, images in this case
// npm i faker
// bitbucket
