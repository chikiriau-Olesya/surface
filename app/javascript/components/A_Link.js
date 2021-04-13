import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Link.scss'

const STYLES = [
  'link--black',
  'link--blue',
  'link--grey',
]
const A_Link = ({
  address,
  name,
  linkStyle
}) => {

  const checkLinkStyle = STYLES.includes(linkStyle)
  ? linkStyle : STYLES[0]

  return(
      <a href = {address} className = {`link ${checkLinkStyle}`}>
        {name}
      </a>

  )
}

export default A_Link
