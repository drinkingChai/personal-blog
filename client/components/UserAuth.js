import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn, logOut } from '../store'

class UserAuth extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onLoginHandler = this.onLoginHandler.bind(this)
    this.onLogoutHandler = this.onLogoutHandler.bind(this)
  }

  onChangeHandler(ev) {
    const { name, value } = ev.target
    const nextState = {}
    Object.assign(nextState, this.state, { [name]: value })
    this.setState(nextState)
  }

  onLoginHandler(ev) {
    ev.preventDefault()
    this.props.logIn(this.state)
  }

  onLogoutHandler(ev) {
    ev.preventDefault()
    this.props.logOut()
  }

  render() {
    const { currentUser } = this.props
    const { email, password } = this.state
    const { onChangeHandler, onLoginHandler, onLogoutHandler } = this

    return (
      <form onSubmit={ onLoginHandler }>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={ onChangeHandler }/>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' onChange={ onChangeHandler }/>
        </div>

        { currentUser.id ?
            <button onClick={ onLogoutHandler }>Log out</button> :
            <button>Log in</button> }
      </form>
    )
  }
}

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = { logIn, logOut }

export default connect(mapState, mapDispatch)(UserAuth)
