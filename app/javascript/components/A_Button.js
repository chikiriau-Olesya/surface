import React from "react"
import PropTypes from "prop-types"
import './button.css'

const STYLES = [
  'btn--default',
  'btn--unactive',
  'btn--text',
  'btn--graytext',
  'btn--alternative',
  'btn--back',
]

const SIZES = ['btn--medium', 'btn--large']

class A_Button extends React.Component {
  render ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) {

    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize : SIZES[0]
    
    return (
      <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
         <img src= "./img/backArrow.svg"></img>
         {children}
      </button>
    );
  }
}

export default A_Button
