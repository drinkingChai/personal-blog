import React, { Component } from 'react'
import store, { fetchBlogs } from '../store'
import PostBlog from './PostBlog'
import Blogs from './Blogs'

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchBlogs())
  }

  render() {
    return (
      <div>
        <PostBlog /> 
        <Blogs />
      
      </div>
    )
  }
}
