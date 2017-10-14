import React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

const Blog = ({ blog }) => {
  return (
    <div>
      <h3>{ blog.title }</h3>
      <ReactMarkdown source={ blog.content }/>
    </div>
  )
}

const mapState = ({ blogs }, ownProps) => ({
  blog: blogs.find(blog => blog.id == ownProps.match.params.id)
})

export default connect(mapState)(Blog)
