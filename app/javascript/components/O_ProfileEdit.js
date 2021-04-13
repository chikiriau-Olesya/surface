import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/O_ProfileEdit.scss'
import M_UserEdit from './M_UserEdit.js'
import M_SideProfileMenu from './M_SideProfileMenu.js'


class O_ProfileEdit extends React.Component {
  render () {
    return (
      <div className="profile-edit">
          <M_SideProfileMenu className = "side-profile-menu"
            />
          <M_UserEdit>
          </M_UserEdit>
      </div>
    );
  }
}

export default O_ProfileEdit
