import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Link.scss'

const A_Link = ({
  address
}) => {
  return (
    <a href = {address} className = "linking">
    </a>

  );
}


export default A_Link
