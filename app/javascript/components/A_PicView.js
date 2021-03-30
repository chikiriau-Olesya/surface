import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_PicView.scss'


const A_PicView = ({
  src
}) => {
  return(
    <img src={src} className ="A_PicView">
    </img>
  )
}

export default A_PicView
