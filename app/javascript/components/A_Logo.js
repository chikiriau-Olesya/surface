import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Logo.scss'
import Logo from "images/logogo.svg"

const STYLES = [
  'logo--main-white',
  'logo--main-black',
  'logo--big-white',
  'logo--big-black'
]

const A_Logo = ({
  src,
  logoStyle
}) => {

  const checkLogoStyle = STYLES.includes(logoStyle)
  ? logoStyle : STYLES[0]


  return(
      <img src={Logo} className = {`logo ${checkLogoStyle}`}>
      </img>
  )
}


export default A_Logo
