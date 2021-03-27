import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Btn.scss'
import Arrow from 'images/arrow-btn.svg'

const STYLES = [
  'btn--main',
  'btn--secondary',
  'btn--icons'
]

const STATES = [
  'btn--primary',
  'btn--hover',
  'btn--pressed',
  'btn--disabled'
]

const A_Btn = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonState
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)
  ? buttonStyle : STYLES[0]

  const checkButtonState = STATES.includes(buttonState)
  ? buttonState : STATES[0]

  return(
      <button className = {`btn ${checkButtonStyle} ${checkButtonState}`} onClick = {onClick} type = {type}>
        {children}
      </button>
  )
}


export default A_Btn
