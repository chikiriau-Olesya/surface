import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H1.scss'
import 'stylesheets/A_Heading.scss'

const STYLES = [
  'A_H1--black',
  'A_H1--white'
]

const A_H1 = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <h1 className = {`A_H1 ${checkColor}`} type = {type}>
        {content}
      </h1>

  )
}

export default A_H1
