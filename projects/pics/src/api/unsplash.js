// preconfigured axios instance

import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5n4sqSgKNCOPOE8-gfmI6zVIAyjHggzn9hfRHhPt0Cs'
  }
})

// config for getting unsplash to accept request
