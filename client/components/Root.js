import React, { Component } from 'react'
import PostBlog from './PostBlog'
import store, { fetchBlogs } from '../store'

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchBlogs())
  }

  render() {
    return (
      <div>
        <PostBlog /> 
      
      
      </div>
    )
  }
}
