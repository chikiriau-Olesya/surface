import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H4.scss'
import 'stylesheets/A_Heading.scss'

const STYLES = [
  'A_H4--black',
  'A_H4--white'
]

const A_H4 = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <h3 className = {`A_H4 ${checkColor}`} type = {type}>
        {content}
      </h3>

  )
}

export default A_H4
