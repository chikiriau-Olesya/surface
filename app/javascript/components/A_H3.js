import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H3.scss'

const STYLES = [
  'A_H3--black',
  'A_H3--white',
  'A_H3--grey'
]

const A_H3 = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <h3 className = {`A_H3 ${checkColor}`} type = {type}>
        {content}
      </h3>

  )
}

export default A_H3
