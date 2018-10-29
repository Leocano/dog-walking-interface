import React from 'react'
import setClass from 'classnames'

import Button from '../Button/Button'

import './ButtonToggle.css'

const ButtonToggle = props => {
  const classNames = setClass('app-button-toggle', props.styleClass, {
    'is-outlined': !props.isActive
  })
  return <Button className={classNames} onClick={props.onClick} text={props.text} />
}

export default ButtonToggle
