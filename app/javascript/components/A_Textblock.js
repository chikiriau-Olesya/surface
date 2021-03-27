import React from 'react'
import 'stylesheets/A_Textblock.scss'

const STYLES = [
  'text--black',
  'text--gray',
  'text--red',
  'text--white',
]

const SIZES = [
'text--body',
'text--descript',
'text--s-descript',
'text--subbody'
]

const A_Textblock = ({
  children,
  type,
  textStyle,
  textSize,
}) => {

  const checkTextStyle = STYLES.includes(textStyle)
  ? textStyle : STYLES[0]

  const checkTextSize = SIZES.includes(textSize)
  ? textSize : SIZES[0]

  return(
      <span className = {`textblock ${checkTextStyle} ${checkTextSize}`} type = {type}>
        {children}
      </span>

  )
}

export default A_Textblock
