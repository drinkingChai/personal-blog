import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Blogs from './Blogs'
import SingleBlog from './SingleBlog'
import PostBlog from './PostBlog'
import UserAuth from './UserAuth'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={ Blogs }/>
      <Route exact path='/login' component={ UserAuth }/>
      <Route exact path='/new-blog' component={ PostBlog }/>
      <Route exact path='/blogs/:id' component={ SingleBlog }/>
    </Switch>
  )
}
