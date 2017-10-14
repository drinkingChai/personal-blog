import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store, { fetchBlogs, fetchUser } from '../store'

import Nav from './Nav'
import Routes from './Routes'

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchBlogs())
    store.dispatch(fetchUser())
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div>
        <Route component={ Nav }/>
        <Routes />
      </div>
    )
  }
}
