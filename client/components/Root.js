import React, { Component } from 'react'
import store, { fetchBlogs, fetchUser } from '../store'
import PostBlog from './PostBlog'
import Blogs from './Blogs'
import UserAuth from './UserAuth'

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchBlogs())
    store.dispatch(fetchUser())
      .catch(err => console.log(err.message))
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
