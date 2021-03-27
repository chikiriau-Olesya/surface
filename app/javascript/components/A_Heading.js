import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Heading.scss'
const STYLES = [
  'heading--black',
  'heading--white',
  'heading--gray',
  'heading--red',
]

const SIZES = [
'heading--h1',
'heading--h2',
'heading--h3',
'heading--article',
'heading--article-preview'
]

const A_Heading = ({
  children,
  type,
  headingStyle,
  headingSize,
}) => {

  const checkHeadingStyle = STYLES.includes(headingStyle)
  ? headingStyle : STYLES[0]

  const checkHeadingSize = SIZES.includes(headingSize)
  ? headingSize : SIZES[0]

  return(
      <span className = {`heading ${checkHeadingStyle} ${checkHeadingSize}`} type = {type}>
        {children}
      </span>

  )
}

export default A_Heading
