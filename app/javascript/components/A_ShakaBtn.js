import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Btn.scss'
import Shaka from 'images/like_clicked.svg'

const A_ShakaBtn = ({
  child,
  onClick
}) => {


  return(
      <div className = "A_ShakaBtn" onClick = {onClick}>
        <img src= {Shaka}></img>
      </div>
  )
}


export default A_ShakaBtn
