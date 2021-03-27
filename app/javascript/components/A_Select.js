import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Select.scss'

const A_Select = props => {
  return(
    <div className="form-group">
      <label for={props.name}> {props.title} </label>
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option.id} value={option.id} label={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default A_Select
