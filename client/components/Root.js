import React, { Component } from 'react'
import store, { fetchBlogs } from '../store'
import PostBlog from './PostBlog'
import Blogs from './Blogs'
import UserAuth from './UserAuth'

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchBlogs())
  }

  render() {
    return (
      <div>
        <PostBlog /> 
        <Blogs />
        <UserAuth />
      
      </div>
    )
  }
}
