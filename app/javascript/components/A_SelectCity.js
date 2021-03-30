import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Select.scss'

const A_SelectCity = props => {
  return(
    <div className="form-group">
      <select
      type="text"
      value={""}
      onChange={""}
      >
        <option value="1">Москва</option>
        <option value="2">Сочи</option>
      </select>
    </div>
  )
}

export default A_SelectCity
