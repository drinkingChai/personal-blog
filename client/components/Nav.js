import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../store'

const Nav = ({ currentUser, logOut }) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      { currentUser.id ?
          <span>
            <Link to='/' onClick={ logOut }>Log out</Link>
            <Link to='/new-blog'>New blog</Link>
          </span>
          :
          <Link to='/login'>Log In</Link> }
    </div>
  )
}

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = { logOut }

export default connect(mapState, mapDispatch)(Nav)
