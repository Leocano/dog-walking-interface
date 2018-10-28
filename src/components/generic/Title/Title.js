import React from 'react'

import './Title.css'

const Title = props => {
  const size = props.size ? props.size : '2'
  return (
    <p className={`title app-title is-${size}`}>{props.children}</p>
  )
}

export default Title
