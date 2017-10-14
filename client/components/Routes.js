import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Blogs from './Blogs'
import PostBlog from './PostBlog'
import UserAuth from './UserAuth'

export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Blogs }/>
        <Route exact path='/login' component={ UserAuth }/>
        <Route exact path='/new-blog' component={ PostBlog }/>
      </Switch>
    )
  }
}
