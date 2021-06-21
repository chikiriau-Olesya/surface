import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H5.scss'
import 'stylesheets/A_Heading.scss'

const STYLES = [
  'A_H5--black',
  'A_H5--white'
]

const A_H5 = ({
  content,
  type,
  color,
}) => {

  const checkColor = STYLES.includes(color)
  ? color : STYLES[0]

  return(
      <h4 className = {`A_H5 ${checkColor}`} type = {type}>
        {content}
      </h4>

  )
}
export default A_H5
