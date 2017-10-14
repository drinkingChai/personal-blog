import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

const Blogs = ({ blogs }) => {
  return (
    <div>
      {
        blogs.map(blog => (
          <div key={ blog.id }>
            <ReactMarkdown source={ blog.content }/>
            <Link to={ `/blogs/${blog.id}` }>Read more</Link>
          </div>))
      }
    </div>
  )
}

const mapState = ({ blogs }) => ({ blogs })

export default connect(mapState)(Blogs)
