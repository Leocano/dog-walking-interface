import React from 'react'
import setClass from 'classnames'

const Button = props => {
  const classNames = setClass('button', props.className)
  return <button className={classNames} onClick={props.onClick}>{props.text}</button>
}

export default Button
