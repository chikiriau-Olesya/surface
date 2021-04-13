import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_SideProfileMenu.scss'
import A_Heading from './A_Heading.js'
import A_Link from './A_Link.js'

class M_SideProfileMenu extends React.Component {
  render () {
    return (
      <div className="profile-sidebar">
          <A_Link className = 'linking--black'
            linkStyle="link--black"
            address = "/users/2"
            name = "Профиль"
            >
          </A_Link>
          <A_Link className = 'linking--black'
            linkStyle="link--black"
            address = "#"
            name = "Настройки аккаунта"
            >
          </A_Link>
          <A_Link className = 'linking--black'
            linkStyle="link--black"
            address = "#"
            name = "Уведомления"
            >
          </A_Link>
          <A_Link className = 'linking--black'
            linkStyle="link--black"
            address = "#"
            name = "Политика конфиденциальности"
            >
          </A_Link>
      </div>
    );
  }
}

export default M_SideProfileMenu
