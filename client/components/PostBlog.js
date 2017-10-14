import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

export default class PostBlog extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: ''
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
  }

  render() {
    const { title, content } = this.state
    const { onChangeHandler, onSubmitHandler } = this

    return (
      <form onSubmit={ onSubmitHandler }>
        <div>
          <label htmlFor='title'>Title</label>
          <input name='title' onChange={ onChangeHandler }/>
        </div>

        <div>
          <label htmlFor='content'>Content</label>
          <textarea name='content' onChange={ onChangeHandler }></textarea>
        </div>

        <ReactMarkdown source={ content }/>

        <button>Submit</button>
      </form>
    )
  }
}
