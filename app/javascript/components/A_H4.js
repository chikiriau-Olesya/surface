import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H4.scss'
import 'stylesheets/A_Heading.scss'

const A_H4 = ({
  content
}) => {
  return(
      <h4 className = "A_H4">
        {content}
      </h4>

  )
}

export default A_H4
