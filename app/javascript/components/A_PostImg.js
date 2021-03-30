import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_PostImg.scss'

const STYLES = [
  'img--main',
  'img--wide',
  'img--super',
  'img--short--big',
  'img--short--small',
]

const A_PostImg = ({
  source,
  imgStyle
}) => {

const checkImgStyle = STYLES.includes(imgStyle)
? imgStyle : STYLES[0]


  return (
    <div className = {`img ${checkImgStyle}`}>
      <img src={post.img.thumb.url}></img>
    </div>

  );
}


export default A_PostImg
