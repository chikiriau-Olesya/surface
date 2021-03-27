import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Textarea.scss'

const A_Textarea = ({
  type,
  value,
  onChange,
  textChild,
  placeholder
}) => {

  return(
    <div>
      <label className="input-label">{textChild}</label>
      <textarea className = "textarea" type = {type} value={value} onChange={onChange} placeholder = "Content...">
        {}
      </textarea>
    </div>
  )
}

export default A_Textarea
