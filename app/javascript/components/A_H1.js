import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H1.scss'

const A_H1 = ({
  content
}) => {
  return(
      <h1 className = "A_H1">
        {content}
      </h1>

  )
}

export default A_H1
