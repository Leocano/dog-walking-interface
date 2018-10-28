import React from 'react'

import './Loader.css'

const Loader = props => {
  if (props.isLoading) {
    return (
      <div className='has-text-centered'>
        <div className='app-loader'><div /><div /><div /><div /></div>
      </div>
    )
  }
  const Component = props.children
  return Component
}

export default Loader
  