import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H2.scss'
import 'stylesheets/A_Heading.scss'

const STYLES = [
  'A_H2--black',
  'A_H2--white'
]

const A_H2 = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <h2 className = {`A_H2 ${checkColor}`} type = {type}>
        {content}
      </h2>

  )
}

export default A_H2
