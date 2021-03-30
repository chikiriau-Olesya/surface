import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H3.scss'
import 'stylesheets/A_Heading.scss'

const A_H3 = ({
  content
}) => {
  return(
      <h3 className = "A_H3">
        {content}
      </h3>

  )
}

export default A_H3
