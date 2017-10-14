import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// ACTION NAMES
const GET_BLOGS = 'GET_BLOGS'
const ADD_BLOG = 'ADD_BLOG'
const GET_USER = 'GET_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'

// ACTION CREATORS
const getBlogs = blogs => ({ type: GET_BLOGS, blogs })
const addBlog = blog => ({ type: ADD_BLOG, blog })
const getUser = user => ({ type: GET_USER, user })
const logOutUser = user => ({ type: LOG_OUT_USER })

// THUNK
export const fetchBlogs = () => dispatch =>
  axios.get('/api/blogs')
    .then(res => dispatch(getBlogs(res.data)))

export const postBlog = blogData => dispatch =>
  axios.post('/api/blogs', blogData)
    .then(res => dispatch(addBlog(res.data)))

export const logIn = (authInfo) => dispatch =>
  axios.post('/api/sessions', authInfo)
    .then(() => dispatch(fetchUser()))

export const logOut = () => dispatch =>
  axios.delete('/api/sessions')
    .then(() => dispatch(logOutUser()))

export const fetchUser = () => dispatch =>
  axios.get('/api/sessions')
    .then(res => dispatch(getUser(res.data)))

// INITIAL STATE
const initialState = {
  blogs: [],
  currentUser: {}
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return { ...state, blogs: action.blogs }
    case ADD_BLOG:
      return { ...state, blogs: [ ...state.blogs, action.blog ] }
    case GET_USER:
      return { ...state, currentUser: action.user }
    case LOG_OUT_USER:
      return { ...state, currentUser: {} }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
