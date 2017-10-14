import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// ACTION NAMES
const GET_BLOGS = 'GET_BLOGS'
const ADD_BLOG = 'ADD_BLOG'

// ACTION CREATORS
const getBlogs = blogs => ({ type: GET_BLOGS, blogs })
const addBlog = blog => ({ type: POST_BLOG, blog })

// THUNK
export const fetchBlogs = () => dispatch =>
  axios.get('/api/blogs')
    .then(blogs => dispatch(getBlogs(blogs)))

export const postBlog = blogData => dispatch =>
  axios.post('/api/blogs', blogData)
    .then(blog => dispatch(addBlog(blog)))

// INITIAL STATE
const initialState = {
  blogs: []
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return { ...state, blogs: action.blogs }
    case ADD_BLOG:
      return { ...state, blogs: [ ...state.blogs, blog ] }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
