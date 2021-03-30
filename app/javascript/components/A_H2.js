import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H2.scss'

const A_H2 = ({
  content,
  headingStyle
}) => {
  return(
      <h2 className = "A_H2">
        {content}
      </h2>

  )
}

export default A_H2
