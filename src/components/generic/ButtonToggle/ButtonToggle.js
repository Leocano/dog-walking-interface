import React from 'react'
import setClass from 'classnames'

import './ButtonToggle.css'

const ButtonToggle = props => {
  const classNames = setClass('button', 'app-button-toggle', props.styleClass, {
    'is-outlined': !props.isActive
  })
  return <button className={classNames} onClick={props.onClick}>{props.text}</button>
}

export default ButtonToggle
