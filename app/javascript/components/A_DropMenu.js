import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_DropMenu.scss'
import A_Category from './A_Category.js'

class A_DropMenu extends React.Component {
  render () {
    return (
      <div className="drop-menu-list">
        <ul>
          <li>{item_1}</li>
          <li>{item_2}</li>
          <li>{item_3}</li>
          <li>{item_4}</li>
          <li>{item_5}</li>
          <li>{item_6}</li>
          <li>{item_7}</li>
        </ul>
      </div>
    );
  }
}

export default A_DropMenu
