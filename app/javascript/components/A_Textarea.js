import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Textarea.scss'

const STYLES = [
  'textarea--main',
  'textarea--large'
]
const A_Textarea = ({
  type,
  value,
  onChange,
  textareaStyle,
  textChild,
  placeholder
}) => {

  const checkTextareaStyle = STYLES.includes(textareaStyle)
  ? textareaStyle : STYLES[0]

  return(
    <div>
      <label className="input-label">{textChild}</label>
      <textarea className = {`textarea ${checkTextareaStyle}`} type = {type} value={value} onChange={onChange} placeholder = {placeholder}>
        {}
      </textarea>
    </div>
  )
}

export default A_Textarea
