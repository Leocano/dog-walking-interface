import React from 'react'
import setClass from 'classnames'

const Columns = (props) => {
  const { children } = props
  const className = setClass({
    'columns': true,
    'is-multiline': props.isMultiline
  })
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Columns
