import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../store'

class UserAuth extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(ev) {
    const { name, value } = ev.target
    const nextState = {}
    Object.assign(nextState, this.state, { [name]: value })
    this.setState(nextState)
  }

  onSubmitHandler(ev) {
    ev.preventDefault()
    this.props.logIn(this.state)
  }

  render() {
    const { email, password } = this.state
    const { onChangeHandler, onSubmitHandler } = this

    return (
      <form onSubmit={ onSubmitHandler }>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={ onChangeHandler }/>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' onChange={ onChangeHandler }/>
        </div>

        <button>Submit</button>
      </form>
    )
  }
}

const mapDispatch = { logIn }

export default connect(null, mapDispatch)(UserAuth)
