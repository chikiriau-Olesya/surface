import React from "react"
import PropTypes from "prop-types"
import Settings from "images/settings.svg"


const A_IconBtn = ({
  src,
  address
}) => {
  return (
    <a href = {address} className="icon-btn">
      <img src ={Settings}/>
    </a>
  );
}

export default A_IconBtn
