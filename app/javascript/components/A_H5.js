import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_H5.scss'
import 'stylesheets/A_Heading.scss'

const A_H5 = ({
  content
}) => {
  return(
      <h5 className = "A_H5">
        {content}
      </h5>

  )
}

export default A_H5
