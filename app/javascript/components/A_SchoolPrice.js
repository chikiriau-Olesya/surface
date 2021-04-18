import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SchoolPrice.scss'


const A_SchoolPrice = ({
  children
}) => {

  return(
      <p className="A_SchoolPrice">
        тренировки от {children}
      </p>

  )
}

export default A_SchoolPrice
