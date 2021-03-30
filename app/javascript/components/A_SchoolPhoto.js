import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SchoolPhoto.scss'

const STYLES = [
  'ph--main',
  'ph--small'
]

const A_SchoolPhoto = ({
  source,
  imgStyle
}) => {

const checkImgStyle = STYLES.includes(imgStyle)
? imgStyle : STYLES[0]


  return (
    <div className = {`ph ${checkImgStyle}`}>
      <img src={school.img.thumb.url}></img>
    </div>

  );
}


export default A_SchoolPhoto
