import React from "react"
import PropTypes from "prop-types"
import Play from "images/playBtn.svg"



const A_PlayBtn = ({
  imageSrc
}) => {
  return(
    <div className="play-button">
      <img src= {imageSrc}></img>
    </div>
  )
}


export default A_PlayBtn
