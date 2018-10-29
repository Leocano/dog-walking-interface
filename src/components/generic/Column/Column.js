import React from 'react'
import setClass from 'classnames'

const Column = (props) => {
  const { children } = props
  const className = setClass('column', props.className)
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Column
