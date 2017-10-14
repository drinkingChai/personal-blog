import React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

const Blogs = ({ blogs }) => {
  return (
    <div>
      {
        blogs.map(blog => (
          <ReactMarkdown key={ blog.id } source={ blog.content }/>))
      }
    </div>
  )
}

const mapState = ({ blogs }) => ({ blogs })

export default connect(mapState)(Blogs)
